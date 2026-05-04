import express from "express";
import { createServer } from "node:http";

import { Server } from "socket.io";
import mongoose from "mongoose";

import { connectToSocket } from "./controllers/socketManager.js";

import cors from "cors"
import useRoutes from "./routes/users.routes.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", (process.env.PORT || 8000))
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: "true" }));
app.use("/api/v1/users", useRoutes);

const start = async () => {
    const connectionDb = await mongoose.connect("mongodb+srv://arpit17351722_db_user:Ayush6691@videoconfern.qggydre.mongodb.net/")
    console.log(`MONGO Connected DB HOst: ${connectionDb.connection.host}`)
    server.listen(app.get("port"), () => {
        console.log("LISTEN ON PORT 8000")
    })
}

start();