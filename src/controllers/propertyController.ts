import { Request, Response } from "express";
import propertyService from "../services/propertyService";
import locationService from "../services/locationService";

const getAllProperties = async (req: Request, res: Response) => {
    try {
        const properties = await propertyService.getAllProperties();
        res.status(201).json({ statusCode: 201, data: properties })
    } catch (error) {
        res.status(500).json({ statusCode: 500, message: error });
    }
};

const createProperty = async (req: Request, res: Response) => {
    try {
        const property = await propertyService.createProperty(req.body);
        res.status(200).json({ statusCode: 200, data: property, message: 'Property created successfully!' })
    } catch (error) {
        res.status(400).json({ statusCode: 400, message: error });
    }
}

const getLocationSuggestions = async (req: Request, res: Response) => {
    try {
        const searchQuery = req.query.search;

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
