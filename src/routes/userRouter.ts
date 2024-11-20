import express from 'express';
import UserModel from '../models/userModel';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const users = await UserModel.find().exec();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
});

export default router;