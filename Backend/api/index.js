import product from "./product.js";
import user from "./user.js";
import order from "./order.js"
import { Router } from "express";

export default ({ config, db }) => {
    let api = Router();
    api.use('/product', product({ config, db }))
    api.use('/order', product({ config, db }))
    api.use('/user', product({ config, db }))

    return api;
}