import { Router } from "express"
import { userCollection } from '../models/index.js'
import jwt from 'jsonwebtoken';


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
                new_user.user_id = id;
                const user = await userCollection.create(new_user);
                console.log(user.username);
                const data = {
                    new_user: {
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
                        err && err.errorResponse ? err.errorResponse.errmsg : "Error occured",
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
    return router;
}