import mongoose from 'mongoose';

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Mongo DB connected")
    }catch(error) {
      console.log("error connecting to mongo db", error.message)  
    }
}

export default connectToMongoDB;