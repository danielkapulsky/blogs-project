import mongoose from "mongoose";
import chalk from "chalk";
import dotenv from "dotenv";

dotenv.config()

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGOOSE_URL)
        console.log(chalk.bgBlue.bold("mongoDB connected!"))
    } catch (error) {
        console.log(chalk.bgRed.bold(error))
    }
}