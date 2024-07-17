import express from "express";
import dotenv from "dotenv";
import createConnection from "./src/db/connection.js";
dotenv.config();
createConnection(); 

const app = express();
const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})
