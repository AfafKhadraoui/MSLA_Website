import { Router } from 'express';
import { userCollection } from '../models/index.js';
import fetchUser from '../middlewares/fetchUser.js'; // Middleware to fetch user from token

export default ({ config, db }) => {
    let router = Router();

    router.post('/saveCart', fetchUser, async (req, res) => {
        try {
            const { user_id } = req.user;
            const { cart } = req.body; // Cart should be sent in the request body

            // Find the user and update their cart
            const user = await userCollection.findOne({ user_id: user_id });
            if (!user) {
                return res.status(404).send({ success: false, message: 'User not found' });
            }

            user.cart = cart; // Save the cart data to the user's document
            await user.save();

            res.status(200).send({ success: true, message: 'Cart saved successfully' });
        } catch (err) {
            res.status(500).send({ success: false, message: err.message });
        }
    });

    return router;
};
