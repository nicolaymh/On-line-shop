import express from 'express';
import dotenv from 'dotenv';

import userRoutes from './routes/users.routes.js';

import dbConnection from './database/config.js';

// Create server express
const app = express();

// activate environment variables
dotenv.config();

// Parse to body json
app.use(express.json());

// DB Connection Connect database
dbConnection();

// Routing
app.use('/api/users', userRoutes);

app.listen(process.env.PORT || 3000, () => {
    console.log(`🚀 Running on port ${process.env.PORT || 3000} 🚀`);
});
