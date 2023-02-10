const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DATABASE);
        console.log('Database Connected');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = dbConnection;