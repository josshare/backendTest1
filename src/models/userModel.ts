import mongoose from 'mongoose';
import { IUser } from '../interfaces/userInterface';

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

// Create the model only if it doesn't exist
const UserModel = mongoose.models.User || mongoose.model<IUser>('User', userSchema);

export default UserModel;