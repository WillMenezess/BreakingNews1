import express from 'express';
import connectDatabase from './src/database/database.js';
import userRoute from "./src/routes/user.route.js";
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT
const app = express();

connectDatabase();
app.use(express.json());
app.use("/user", userRoute);

app.listen(port, () => console.log(`Server is running at port ${port}`));

