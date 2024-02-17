import { NextFunction, Request, Response } from "express";

const validateProperty = (req: Request, res: Response, next: NextFunction) => {
    const { title, type, area, price } = req.body;

    const errors = [];

    if (!title) errors.push('Title is required!');
    if (!type) errors.push('Type is required!');
    if (!area) errors.push('Area is required!');
    if (price === undefined || price === null) {
        errors.push('Price is required!');
    } else {
        if (typeof price.amount !== 'number') errors.push('Price must be a number!');
        if (typeof price.isNegotiable !== 'boolean') errors.push('Price isNegotiable must be a boolean.');
    }

    if (errors.length > 0) {
        return res.status(400).json({ message: 'Validation Error', errors });
    }

    next();
}

export default validateProperty;