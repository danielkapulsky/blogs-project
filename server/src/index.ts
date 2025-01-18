import  express  from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import chalk from "chalk";
import cookieParser from "cookie-parser";
import { connectDB } from "./db/db";
import { blogsRouter } from "./routes/blogs";
import usersRouter from "./routes/users";

const app = express();
dotenv.config();

const port = process.env.PORT;

app.use(cors({
    origin: "http://localhost:5173", // Frontend URL
    credentials: true,              // Allow cookies
  }));
app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());
app.use("/api/blogs",blogsRouter);
app.use("/api/users", usersRouter);

app.listen( port , () => {
    console.log(chalk.bgBlue.bold(`server running on http://localhost:${port}`));
});

connectDB();