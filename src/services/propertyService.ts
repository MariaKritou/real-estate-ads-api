import PropertyModel from "../models/propertyModel";
import { IProperty } from "../types/propertyTypes";

export const createProperty = async (propertyData: IProperty) => {
    const property = new PropertyModel(propertyData);
    await property.save();

    return property;
}

export default{ 
    createProperty,
}