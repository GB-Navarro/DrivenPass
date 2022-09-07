import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/router.js"
import errorHandler from "./middlewares/errorHandler.js";

import "express-async-errors";

dotenv.config({path:"../.env"});

const server = express();

server.use(cors());
server.use(express.json());
server.use(router);
server.use(errorHandler);

server.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})

