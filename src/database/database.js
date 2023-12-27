const mongoose = require('mongoose');

const connectDatabase = () => {
    console.log("Wait, we're attempting connect to database");
    mongoose.connect("mongodb+srv://willmene:280102Wmo@cluster0.ofkqonm.mongodb.net/?retryWrites=true&w=majority",
        {
            dbName: "BreakingNews"
        }
    ).then(() => console.log("MongoDb Atlas connected!")).catch((error) => console.log(error));
};

module.exports = connectDatabase;