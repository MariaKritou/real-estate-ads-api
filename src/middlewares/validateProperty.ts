import { NextFunction, Request, Response } from "express";

/**
 * Middleware to validate the property data from the request body.
 * Checks for the presence and correctness of the 'title', 'type', 'area', and 'priceDetails' fields.
 * If any validations fail, it responds with a 400 status code and a list of validation errors.
 * 
 * @param {Request} req - The Express request object containing the property data in the body.
 * @param {Response} res - The Express response object used to send back a response if validation fails.
 * @param {NextFunction} next - The next middleware function in the Express router's request handling chain.
 */
const validateProperty = (req: Request, res: Response, next: NextFunction) => {
    const { title, type, area, priceDetails } = req.body;

    const errors = [];

    // Validate each field, adding an error message to the array for any invalid or missing field.
    if (!title) errors.push('Title is required!');
    if (!type) errors.push('Type is required!');
    if (!area) errors.push('Area is required!');
    if (priceDetails === undefined || priceDetails === null) {
        errors.push('Price is required!');
    } else {
        // If priceDetails are provided, further validate its structure.
        if (typeof priceDetails.amount !== 'number') errors.push('Price must be a number!');
        if (typeof priceDetails.isNegotiable !== 'boolean') errors.push('Price isNegotiable must be a boolean.');
    }

    if (errors.length > 0) {
        return res.status(400).json({ message: 'Validation Error', errors });
    }

    // If validation passes without any errors, proceed to the next middleware function.
    next();
}

export default validateProperty;