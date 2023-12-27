const express = require('express');
const app = express();
const connectDatabase = require('./src/database/database.js');

const userRoute = require("./src/routes/user.route.js");

const port = 3000;

connectDatabase();
app.use(express.json());
app.use("/user", userRoute);

app.listen(3000, () => console.log(`Server is running at port ${port}`));

