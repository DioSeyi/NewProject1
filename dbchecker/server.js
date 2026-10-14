const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MySQL
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "user_login"
});

// Test MySQL connection
db.connect((err) => {
    if (err) {
        console.error("MySQL connection failed:", err);
        return;
    }

    console.log("Connected to MySQL!");
});

// Get users from MySQL
app.get("/users_cred", (req, res) => {
    const sql = "SELECT * FROM users_cred";

    db.query(sql, (err, results) => {
        if (err) {
            console.error("Database query failed:", err);

            return res.status(500).json({
                error: "Failed to retrieve users"
            });
        }

        res.json(results);
    });
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});