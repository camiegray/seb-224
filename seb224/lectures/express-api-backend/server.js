import express from 'express';
import mongoose from 'mongoose';
import db from './db.js';
import chalk from 'chalk';
import logger from 'morgan'

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI 

app.use(express.json());
app.use(logger('dev'));

db.on("connected", () => {
console.clear();
console.log(chalk.green("MongoDB connected successfully"));
}
)
app.listen(PORT, () => {    
    console.log(chalk.blue(`Server is running on port ${PORT}`));
    mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log(chalk.green("MongoDB connected successfully")))
    .catch(err => console.error(chalk.red("MongoDB connection error:", err)));
}
);
