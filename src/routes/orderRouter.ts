import mongoose, { Document, Schema } from 'mongoose';

interface IOrder extends Document {
    truck: mongoose.Schema.Types.ObjectId;
    orderDate: Date;
    status: string;
    items: Array<{
        product: string;
        quantity: number;
        price: number;
    }>;
}

const orderSchema = new Schema<IOrder>({
    truck: {
        type: Schema.Types.ObjectId,
        ref: 'Truck',
        required: true
    },
    orderDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    status: {
        type: String,
        required: true,
        enum: ['Pending', 'Completed', 'Cancelled'],
        default: 'Pending'
    },
    items: [
        {
            product: {
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            },
            price: {
                type: Number,
                required: true
            }
        }
    ]
});

const Order = mongoose.model<IOrder>('Order', orderSchema);

export default Order;