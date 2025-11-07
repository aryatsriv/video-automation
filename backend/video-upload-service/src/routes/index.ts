import { Router, Request, Response } from 'express';

// Create a new router instance
const router = Router();

// Define a simple GET route
router.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Welcome to the API!' });
});

// Define another example route
router.get('/hello', (req: Request, res: Response) => {
    const name = req.query.name || 'World';
    res.json({ message: `Hello, ${name}!` });
});

// Export the router
export default router;