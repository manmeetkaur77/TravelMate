const dotenv =require('dotenv');
const mongoose = require('mongoose');

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.DATABASE_STRING, {
			// To avoid warnings in the console
			useNewUrlParser: true,
			useUnifiedTopology: true,
            autoIndex: false, // Don't build indexes automatically in MongoDB
		});

		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
		console.error(`Error: ${error.message}`);
		process.exit(1);
	}
};
module.exports=connectDB;
