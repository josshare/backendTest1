import express from 'express';
import { Request, Response } from 'express';
import mongoose from 'mongoose';
import Truck from '../models/truckModel';
import User from '../models/userModel';

const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
    try {
        let user;
        // Check if the user input is a valid ObjectId
        if (mongoose.Types.ObjectId.isValid(req.body.user)) {
            user = await User.findById(req.body.user);
        } else {
            // If not an ObjectId, try to find by email
            user = await User.findOne({ email: req.body.user });
        }
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        const truckData = {
            user: user._id,
            year: req.body.year,
            color: req.body.color,
            plates: req.body.plate
        };
        
        const truck = await Truck.create(truckData);
        res.status(201).json(truck);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(400).json({ message: 'An unknown error occurred' });
        }
    }
});

export default router;