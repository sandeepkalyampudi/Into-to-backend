import dotenv from 'dotenv'
import connectDb from "./db/index.js";
dotenv.config({ path: './env' })
import dns from "node:dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);
connectDb()


/*
import express from "express"
import { error } from "node:console";
const app = express();

const connectDb = async () => {
    try {
        await mongoose.connect(`${process.env.MONOGODB_URL}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERROR", error)
            throw error
        })

        app.listen(`${process.env.PORT}`, () => {
            console.log(`app is running at port no ${process.env.PORT}`)
        })

    } catch (error) {
        console.log(`monogo Db have some error is: ${error}`);
    }
}
connectDb();
*/