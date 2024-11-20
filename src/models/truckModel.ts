const mongoose = require('mongoose');
import { Document, Schema } from 'mongoose';
import { ITruck } from '../interfaces/truckInterface';
const truckModel = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    color: {
        type: Number,
        required: true
    },
    plate: {
        type: String,
        required: true
    }
});
