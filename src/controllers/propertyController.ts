import { Request, Response } from "express";
import propertyService from "../services/propertyService";
import locationService from "../services/locationService";

const createProperty = async (req: Request, res: Response) => {
    try {
        const property = await propertyService.createProperty(req.body);
        res.status(201).json(property);
    } catch (error) {
        res.status(400).json({ message: error });
    }
}

const getLocationSuggestions = async (req: Request, res: Response) => {
    try {
        const searchQuery = req.query.search;

        if(typeof searchQuery !== 'string') {
            return res.status(400).json({message: 'Invalid search query'})
        }

        const locations = await locationService.fetchLocations(searchQuery)
        res.json(locations);
    } catch (error) {
        res.status(500).json({message: error})
    }
}

export default {
    createProperty,
    getLocationSuggestions,
}
