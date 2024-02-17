import express from 'express';
import propertyController from '../controllers/propertyController';

const propertyRoutes = express.Router();

propertyRoutes.post('/properties', propertyController.createProperty)

export default propertyRoutes;