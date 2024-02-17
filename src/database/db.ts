import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        if (process.env.MONGO_URI === undefined) {
            throw new Error('MONGO_URI is not defined in your env variables');
        }
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;
