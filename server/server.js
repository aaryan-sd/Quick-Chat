import express from 'express';
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectToMongo from './db/connectionToMongo.js';
import messagesRoutes from './routes/messages.routes.js';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/user.routes.js';
import cors from 'cors';

dotenv.config();

const app = express()
const port = process.env.PORT || 8000;

app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/messages", messagesRoutes);


app.listen(port, () => {
  connectToMongo();
  console.log(`Example app listening on port ${port}`)
})