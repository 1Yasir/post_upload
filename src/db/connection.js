import mongoose from "mongoose";

const createConnection = async () => {
    try {

        const mongoInstance = await mongoose.connect(`${process.env.MONGODB_URI}`);

        console.log("connected");

    } catch (error) {

        console.log("MONGODB THROW ERROR", error);

    }
}

export default createConnection;