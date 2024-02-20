import express from "express";
import connectDB from "./database/db";
import dotenv from 'dotenv';
import propertyRoutes from "./routes/propertyRoutes";
import cors from 'cors';
dotenv.config();

const app = express();
app.use(express.json()); 
app.use(cors());

app.use('/api', propertyRoutes);

// Connect to MongoDB
connectDB()

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
