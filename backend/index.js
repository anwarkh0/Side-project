import express from "express";
import dotenv from 'dotenv';
import db from './models/index.js'
import authRouter from "./routes/authRouter.js"
import memeRouter from "./routes/memeRouter.js"
import cookieParser from "cookie-parser";
import cors from 'cors'
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
    optionsSuccessStatus: 200,
}
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

const staticDirectory = "./images";
app.use("/images", express.static(staticDirectory));

app.use('/auth', authRouter)
app.use('/meme', memeRouter)
app.listen(port, async () => {
    console.log(`SERVER IS RUNNING ON PORT ${port}`);
    try {
        await db.sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await db.sequelize.sync();
        console.log('Database synced!');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})