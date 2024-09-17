import { Router } from "express";
import { userCollection } from '../models/index.js';
import jwt from 'jsonwebtoken';
import fetchUser from "../middlewares/fetchUser.js";

export default ({ config, db }) => {
    let router = Router();

    // Create a user
    router.post("/addUser", async (req, res) => {
        try {
            const new_user = req.body;
            let id = 1;
            let check = await userCollection.findOne({ email: new_user.email });
            if (check) {
                return res.status(400).send({ success: false, message: "Existing user found with same email address" });
            } else {
                const users = await userCollection.find({});
                if (users.length > 0) {
                    let last_user = users.slice(-1)[0];
                    id = last_user.user_id + 1;
                }
                const user = new userCollection({
                    first_name: new_user.first_name,
                    last_name: new_user.last_name,
                    email: new_user.email,
                    passwrd: new_user.passwrd,
                    user_id: id,
                    wishlist: [],
                    cart: []  // Initialize the cart as an empty array
                });
                await user.save();

                const data = { user: { user_id: user.user_id } };
                const token = jwt.sign(data, 'secret_ecom');
                res.status(200).send({ success: true, token, user: new_user });
            }
        } catch (err) {
            if (err.code === 11000) {
                res.status(400).send({
                    success: false,
                    message: "User with this name already exists"
                });
            } else {
                res.status(500).send({ success: false, message: err.message });
            }
        }
    });

    // Login route
    router.post("/login", async (req, res) => {
        try {
            let user = await userCollection.findOne({ email: req.body.email });
            if (user) {
                if (req.body.passwrd === user.passwrd) {
                    const data = { user: { user_id: user.user_id } };
                    const token = jwt.sign(data, 'secret_ecom');
                    res.status(200).send({ success: true, token });
                } else {
                    res.status(404).send({ success: false, message: "Wrong password" });
                }
            } else {
                res.status(404).send({ success: false, message: "Email not found" });
            }
        } catch (err) {
            res.status(500).send({ success: false, message: "Error during login" });
        }
    });

    // Get wishlist items route
    router.get('/getwishlistItems', fetchUser, async (req, res) => {
        try {
            const { user_id } = req.user;
            let user = await userCollection.findOne({ user_id });
            if (user && user.wishlist.length > 0) {
                res.status(200).send({
                    success: true,
                    wishlist: user.wishlist
                });
            } else {
                res.status(200).send({ success: true, message: "Your wishlist is empty" });
            }
        } catch (err) {
            res.status(500).send({ success: false, message: "Error occurred" });
        }
    });

    // Save/update the cart route
    router.post('/saveCart', fetchUser, async (req, res) => {
        try {
            const { user_id } = req.user;
            const cartItems = req.body.cart;  // Cart items sent in the request body

            let user = await userCollection.findOne({ user_id });
            if (!user) {
                return res.status(404).send({ success: false, message: "User not found" });
            }

            // Update the user's cart
            user.cart = cartItems;
            await user.save();
            res.status(200).send({ success: true, message: "Cart saved successfully" });
        } catch (err) {
            res.status(500).send({ success: false, message: "Error saving cart" });
        }
    });

    // Get cart items route
    router.get('/getCart', fetchUser, async (req, res) => {
        try {
            const { user_id } = req.user;
            let user = await userCollection.findOne({ user_id });

            if (user && user.cart.length > 0) {
                res.status(200).send({ success: true, cart: user.cart });
            } else {
                res.status(200).send({ success: true, message: "Your cart is empty" });
            }
        } catch (err) {
            res.status(500).send({ success: false, message: "Error retrieving cart" });
        }
    });

    return router;
};
