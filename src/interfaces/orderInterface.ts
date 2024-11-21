import { Document, Schema } from 'mongoose';

export interface IOrder extends Document {
    user: Schema.Types.ObjectId;
    truck: Schema.Types.ObjectId;
    status: 'created' | 'in transit' | 'completed';
    pickup: Schema.Types.ObjectId;
    dropoff: Schema.Types.ObjectId;
}