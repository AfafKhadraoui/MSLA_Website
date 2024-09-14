import jwt from 'jsonwebtoken'
const fetchUser = async (req, res, next) => {
    const token = req.header('auth-token');

    if (!token) {

        res.status(401).send({ message: "Please log in to add items to your cart" })
    }
    else {
        try {
            //decode the token
            const data = jwt.verify(token, 'secret_ecom')
            req.user = data.user;
            next();
        }
        catch (err) {


            if (err.name === 'TokenExpiredError') {
                res.status(401).send({ message: "Session expired. Please log in again." });
            } else if (err.name === 'JsonWebTokenError') {
                res.status(401).send({ message: "Please authenticate using a valid key" });
            } else {
                res.status(500).send({ message: "Internal Server Error", details: err.message });
            }

        }
    }
}
export default fetchUser