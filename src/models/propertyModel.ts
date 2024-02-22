import mongoose, { Document, Schema } from "mongoose";
import { IProperty } from "../types/propertyTypes";

const PropertySchema: Schema = new Schema({
    title: { type: String, required: true, maxlength: 155 },
    type: { type: String, required: true, enum: ['rent', 'buy', 'donation', 'exchange'] },
    area: {
        placeId: { type: String, required: true },
        mainText: { type: String, required: false },
        secondaryText: { type: String, required: false },
    },
    priceDetails: {
        amount: { type: Number, required: true },
        isNegotiable: { type: Boolean, default: false },
    },
    availableFrom: { type: Date, required: false },
    description: { type: String, required: false }
})

const PropertyModel = mongoose.model<IProperty>('Property', PropertySchema);

export default PropertyModel;