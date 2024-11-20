//const mongoose = require('mongoose');
import mongoose from 'mongoose';
import { ITruck } from '../interfaces/truckInterface';
const truckModel = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    plates: {
        type: String,
        required: true
    }
});

const TruckModel = mongoose.models.Truck || mongoose.model<ITruck & Document>('Truck', truckModel);
export default TruckModel;