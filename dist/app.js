import express from "express";
import "express-async-errors";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/router.js";
import errorHandler from "./middlewares/errorHandler.js";
dotenv.config({ path: "../.env" });
var server = express();
server.use(cors());
server.use(express.json());
server.use(router);
server.use(errorHandler);
server.listen(process.env.PORT, function () {
    console.log("Server running on port ".concat(process.env.PORT));
});
