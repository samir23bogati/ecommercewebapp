const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("./configs");

const app = express();

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Database Connection
mongoose.connect(config.mongodb.localDbUrl)
    .then(() => console.log("Database connection successful"))
    .catch((error) => {
        console.error("Database connection failed:", error);
        process.exit(1);
    });

// Example Routes (Add your own)
const userRoutes = require("./routes/userRoutes"); 
app.use("/api/users", userRoutes);

// Start Server
app.listen(config.app.port, (err) => {
    if (err) {
        console.error("Server listening failed!", err);
    } else {
        console.log(`Server listening at port ${config.app.port}!`);
    }
});

// Graceful Shutdown
process.on("SIGINT", () => {
    console.log("Shutting down server...");
    mongoose.connection.close(() => {
        console.log("MongoDB connection closed.");
        process.exit(0);
    });
});
