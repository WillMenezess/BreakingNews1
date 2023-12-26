const express = require('express');
const userRoute = require("./src/routes/user.route.js");
const app = express();

app.use("/", userRoute);

app.listen(3000);

