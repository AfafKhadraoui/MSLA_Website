import express from 'express'
import CONFIG from './config.json' assert {type: 'json'}
import mongoose from 'mongoose'
import cors from 'cors'

const PORT = CONFIG.port || 7000
const app = express();
app.use(cors({
    origin: CONFIG.corsOrigin,
    optionsSuccessStatus: 200
}));

mongoose.connect(CONFIG.mongo_url).then((db) => {
    app.use(express.json())
    app.listen(PORT, () => console.log(`Server is running in ${PORT}`))
}).catch((err) => { console.log(err, "Eroor occured") })