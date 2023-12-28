import express from 'express';
import dotenv from 'dotenv';
import connectDatabase from './src/database/database.js';
import userRoute from "./src/routes/user.route.js";
import authRoute from "./src/routes/auth.route.js";
import newsRoute from "./src/routes/news.route.js";

dotenv.config();

const port = process.env.PORT
const app = express();

connectDatabase();
app.use(express.json());
app.use("/user", userRoute);
app.use("/auth", authRoute);
app.use("/news", newsRoute);


app.listen(port, () => console.log(`Server is running at port ${port}`));

