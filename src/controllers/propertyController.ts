import { Request, Response } from "express";
import propertyService from "../services/propertyService";

const createProperty = async (req: Request, res: Response) => {
    try {
        const property = await propertyService.createProperty(req.body);
        res.status(201).json(property);
    } catch (error) {
        res.status(400).json({ message: error });
    }
}

export default {
    createProperty,
}