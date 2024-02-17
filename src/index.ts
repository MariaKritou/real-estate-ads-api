import express from "express";
import connectDB from "./database/db";
import dotenv from 'dotenv';
dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB()

app.get('/', (req, res) => res.send('Real Estate API!'));

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
