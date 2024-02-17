import mongoose, { Document, Schema } from "mongoose";

type AdvertisementType = 'rent' | 'buy' | 'donation' | 'exchange';

interface PriceDetails {
    amount: number;
    isNegotiable: boolean;
}

interface IProperty extends Document {
    title: string;
    type: AdvertisementType;
    area: string;
    priceDetails: PriceDetails;
    description?: string;
    availableFrom?: Date;
}

const PropertySchema: Schema = new Schema({
    title: { type: String, required: true, maxlength: 155 },
    type: { type: String, required: true, enum: ['rent', 'buy', 'donation', 'exchange'] },
    area: { type: String, required: true },
    priceDetails: {
        amount: { type: Number, required: true },
        isNegotiable: { type: Boolean, default: false },
    },
    availableFrom: { type: Date, required: false },
    description: { type: String, required: false }
})

const PropertyModel = mongoose.model<IProperty>('Property', PropertySchema);

export default PropertyModel;