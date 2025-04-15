import mongoose from "mongoose";
import chalk from "chalk";
import "dotenv/config";
mongoose.connect(process.env.MONGO_URI).catch((err) => {
    console.log(chalk.red("Error connecting to MongoDB: ${err.message}"));
});
mongoose.connection.on("open", () => {
    console.log(chalk.green("Connected to MongoDB"));
});

export default mongoose.connection;