const mongoose = require('mongoose');
const config = require('./config');

const connectDB = async () => {
    try {
        await mongoose.connect(config.dbUri);
        console.log('Database connected successfully');
    } catch (err) {
        console.error('Database connection error:', err);
        process.exit(1);
    }
};

const disconnectDB = async () => {
    try {
        await mongoose.disconnect();
        console.log('Database disconnected successfully');
    } catch (err) {
        console.error('Error disconnecting from the database:', err);
    }
};

module.exports = { connectDB, disconnectDB };
