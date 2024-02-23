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
  try {
    const property = new PropertyModel(propertyData);
    await property.save();
    return property;
  } catch (error) {
    console.error("Error saving property:", error);
    throw new Error('Failed to save property.');
  }
}

export default {
  getAllProperties,
  createProperty,
}