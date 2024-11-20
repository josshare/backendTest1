import { Document, Schema } from 'mongoose';
export interface ITruck extends Document {
    user: Schema.Types.ObjectId;
    year: string;
    color: string;
    plates: string;
}