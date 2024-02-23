import PropertyModel from "../models/propertyModel";
import { IProperty } from "../types/propertyTypes";

/**
 * Retrieves all property documents from the database.
 * 
 * @returns A promise that resolves to an array of all properties in the database.
 * @throws {Error} When there's an issue fetching properties from the database.
 */
const getAllProperties = async () => {
  try {
    const properties = await PropertyModel.find({});
    return properties;
  } catch (error) {
    console.error("Error fetching properties:", error);
    throw new Error('Failed to fetch properties.');
  }
};

/**
 * Creates a new property document in the database.
 * 
 * @param {IProperty} propertyData - The property data to create a new document.
 * @returns A promise that resolves to the newly created property document.
 * @throws {Error} When there's an issue saving the new property to the database.
 */
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