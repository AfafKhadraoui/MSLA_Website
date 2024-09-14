import { Router } from "express"
import { userCollection } from '../models/index.js'
import jwt from 'jsonwebtoken';
import fetchUser from "../middlewares/fetchUser.js";


export default ({ config, db }) => {
    let router = Router()


    // create a user
    router.post("/addUser", async (req, res) => {
        try {
            const new_user = req.body
            let id = 1;
            let check = await userCollection.findOne({ email: new_user.email });
            if (check) {
                return res.status(400).send({ success: false, message: "Existing user found with same email address" })
            }
            else {
                const users = await userCollection.find({})
                if (users.length > 0) {
                    let last_user_array = users.slice(-1)
                    let last_user = last_user_array[0];
                    id = last_user.user_id + 1;
                }
                // new_user.user_id = id
                const user = new userCollection(
                    {
                        first_name: new_user.first_name,
                        last_name: new_user.last_name,
                        email: new_user.email,
                        passwrd: new_user.passwrd,
                        user_id: id,
                        wishlist: []
                    }
                );
                await user.save()
                // console.log(user.username);
                const data = {
                    user: {
                        user_id: user.user_id
                    }
                }

                const token = jwt.sign(data, 'secret_ecom');
                res.status(200).send({ success: true, token, users: new_user })

            }
        }
        catch (err) {
            if (err.code === 11000) {
                res.status(400).send(
                    {
                        success: false,
                        message: "User with this name already exist"
                    }
                )
            }
            else {
                res.status(500).send({
                    success: false,
                    message:
                        err.message

                })
            }
        }
    })
    //login
    router.post("/login", async (req, res) => {
        let user = await userCollection.findOne({ email: req.body.email })
        if (user) {
            if (req.body.passwrd === user.passwrd) {
                const data =
                {
                    user: {
                        user_id: user.user_id
                    }
                }
                const token = jwt.sign(data, 'secret_ecom')
                res.status(200).send({ success: true, token })
            }
            else {
                res.status(404).send({ success: false, message: "Wrong Passeword" })
            }
        }
        else {
            res.status(404).send({ success: false, message: "Email Not Found" })

        }
    })

    //get wishlist items 
    router.get('/getwishlistItems', fetchUser, async (req, res) => {
        try {
            const { user_id } = req.user;
            let user = await userCollection.findOne({ user_id: user_id })
            if (user.wishlist.length > 0) {
                res.status(200).send({
                    success: true,
                    wishlist: user.wishlist,
                });
            }
            else {
                res.send({ success: true, message: "Your wishlist is empty" })
            }
        }
        catch (err) {
            res.status(500).send({ success: false, message: "Error occured" })
        }
    })
    return router;
}