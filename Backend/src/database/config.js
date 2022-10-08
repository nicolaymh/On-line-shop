import mongoose from 'mongoose';

const dbConnection = async () => {
    try {
        mongoose.connect(process.env.DB_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('DB Online');
    } catch (error) {
        console.log(error);
        throw new Error('Error initializing database');
    }
};

export default dbConnection;
