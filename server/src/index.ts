import  express  from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import chalk from "chalk";
import { connectDB } from "./db/db";
import { blogsRouter } from "./routes/blogs";

const app = express();
dotenv.config();

const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use("/api/blogs",blogsRouter);
// app.use("/api/users", usersRouter);

app.listen( port , () => {
    console.log(chalk.bgBlue.bold(`server running on http://localhost:${port}`));
});

connectDB();