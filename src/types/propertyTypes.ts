import { Document } from "mongoose";

type AdvertisementType = 'rent' | 'buy' | 'donation' | 'exchange';

export interface PriceDetails {
    amount: number;
    isNegotiable: boolean;
}

export interface IProperty extends Document {
    title: string;
    type: AdvertisementType;
    area: string;
    priceDetails: PriceDetails;
    description?: string;
    availableFrom?: Date;
}