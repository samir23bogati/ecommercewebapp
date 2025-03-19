const express = require('express');
const app = express();
const config = require('./configs');

// Database connection
const mongoose = require('mongoose');
mongoose.connect(config.mongodb.localDbUrl)
    .then(() => {
        console.log('Database connection successful');
    })
    .catch((error) => {
        console.error('Database connection failed:', error);
    });

// Third-party middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Start server
app.listen(config.app.port, (err) => {
    if (err) {
        console.error('Server listening failed!', err);
    } else {
        console.log(`Server listening at port ${config.app.port}!`);
    }
});
