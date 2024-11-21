import express from 'express';
import userRouter from './routes/userRouter';
import truckRouter from './routes/truckRouter';
import orderRouter from './routes/orderRouter';
import { dbConnect } from './config';

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/users', userRouter);
app.use('/trucks', truckRouter);
app.use('/orders', orderRouter);

// Connect to database and start server
dbConnect().then(() => {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}).catch((error) => {
    console.error('Failed to start server:', error);
    process.exit(1);
});