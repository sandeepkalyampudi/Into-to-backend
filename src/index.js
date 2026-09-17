import dotenv from 'dotenv'
import connectDb from "./db/index.js";
import app from './app.js'
dotenv.config({ path: './env' })
import dns from "node:dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);
connectDb()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`server as running at port no ${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log("Monogo bd have connection fail !!!")
    })

