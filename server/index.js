import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Added the extended option
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
    console.log(`Server Is Running On ${PORT}`);
});
