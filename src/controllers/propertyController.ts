import { Request, Response } from "express";
import propertyService from "../services/propertyService";
import locationService from "../services/locationService";

/**
 * Controller to fetch all properties.
 * 
 * @param {Request} req - The Express request object (not used in this function but required by Express).
 * @param {Response} res - The Express response object used to send back the properties or an error message.
 */
const getAllProperties = async (req: Request, res: Response) => {
    try {
        const properties = await propertyService.getAllProperties();
        res.status(201).json({ statusCode: 201, data: properties })
    } catch (error) {
        res.status(500).json({ statusCode: 500, message: error });
    }
};

/**
 * Controller to create a new property.
 * 
 * @param {Request} req - The Express request object containing the new property data in the body.
 * @param {Response} res - The Express response object used to send back the created property or an error message.
 */
const createProperty = async (req: Request, res: Response) => {
    try {
        const property = await propertyService.createProperty(req.body);
        res.status(200).json({ statusCode: 200, data: property, message: 'Property created successfully!' })
    } catch (error) {
        res.status(400).json({ statusCode: 400, message: error });
    }
}

/**
 * Controller to get location suggestions based on a search query.
 * 
 * @param {Request} req - The Express request object containing the search query in the query parameters.
 * @param {Response} res - The Express response object used to send back the location suggestions or an error message.
 */
const getLocationSuggestions = async (req: Request, res: Response) => {
    try {
        const searchQuery = req.query.search;

        // Validate that the search query is a string.
        if (typeof searchQuery !== 'string') {
            return res.status(400).json({ message: 'Invalid search query' })
        }

        const locations = await locationService.fetchLocations(searchQuery)
        res.json(locations);
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

export default {
    getAllProperties,
    createProperty,
    getLocationSuggestions,
}
