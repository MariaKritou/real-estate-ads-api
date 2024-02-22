import PropertyModel from "../models/propertyModel";
import { IProperty } from "../types/propertyTypes";

const getAllProperties = async () => {
    try {
      const properties = await PropertyModel.find({});
      return properties;
    } catch (error) {
      console.error("Error fetching properties:", error);
      throw new Error('Failed to fetch properties.');
    }
  };
  
export const createProperty = async (propertyData: IProperty) => {

    console.log('ff', propertyData)
    const property = new PropertyModel(propertyData);
    console.log('ff', property)

    await property.save();

    return property;
}

export default {
    getAllProperties,
    createProperty,
}