import mongoose from 'mongoose';

const connectDatabase = () => {
    console.log("Wait, we're attempting connect to database");
    mongoose.connect(process.env.MONGODB_URI,
        {
            dbName: "BreakingNews"
        }
    ).then(() => console.log("MongoDb Atlas connected!")).catch((error) => console.log(error));
};

export default connectDatabase;