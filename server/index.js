import express from 'express';
import dotenv from 'dotenv';
import { open, } from 'sqlite';
import sqlite3 from 'sqlite3';
import path from 'path';
dotenv.config();
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
(async () => {
    try {
        const db = await open({
            filename: path.join(__dirname, "./db", "sqLiteDb.sqlite"),
            driver: sqlite3.Database,
        });
        await db.migrate({
            migrationsPath: path.join(__dirname, "migrations"),
        });
        console.log("Database connected and migrations applied successfully.");
    }
    catch (error) {
        console.error("Error initializing database:", error);
        // process.exit(1); // Exit if there's a failure
    }
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true })); // Added the extended option
    const PORT = process.env.PORT || 3333;
    app.listen(PORT, () => {
        console.log(`Server Is Running On ${PORT}😂`);
    });
})();
