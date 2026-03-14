import mongoose from "mongoose"


const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_DB_URI}`);
        console.log("Connected to DB successfully")
    } catch(err) {
        console.log("Error connecting to Mongo DB", err.message)
    }
}


export default connectDB;