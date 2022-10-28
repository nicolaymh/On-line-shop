import express from 'express';
import dotenv from 'dotenv';

import userRoutes from './routes/users.routes.js';

// DB Connection
import dbConnection from './database/config.js';

// Create server express
const app = express();

// activate environment variables
dotenv.config();

// Parse to body json

// Connect database
dbConnection();

// Routing
app.use('/api/users', userRoutes);

app.listen(process.env.PORT, () => {
    console.log(`🚀 Running on port ${process.env.PORT} 🚀`);
});
