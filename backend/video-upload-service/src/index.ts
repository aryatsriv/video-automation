import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import apiRoutes from './routes/index'; // Import your API routes

// Load environment variables from .env file
dotenv.config();

// Create the Express application
const app: Express = express();

// Get the port from environment variables, with a fallback
const port = process.env.PORT || 3000;

// == Global Middleware ==
// This middleware parses incoming JSON request bodies
app.use(express.json());

// == Routes ==
// Mount your API routes under the /api path
app.use('/api', apiRoutes);

// A simple root endpoint for health checks
app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server is running!');
});

// == Start the Server ==
// Start listening for requests
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});