import express from 'express';
import dotenv from 'dotenv';

import dbConnection from './database/config.js';

import userRoutes from './routes/users.routes.js';

// Create server express
const app = express();

// activate environment variables
dotenv.config();

// Parse to body json
app.use(express.json());

// Connect database
dbConnection();

// Routing
app.use('/api/users', userRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Running on port ${process.env.PORT}`);
});
