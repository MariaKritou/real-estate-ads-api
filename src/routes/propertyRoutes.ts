import express from 'express';
import propertyController from '../controllers/propertyController';
import validateProperty from '../middlewares/validateProperty';

const propertyRoutes = express.Router();

propertyRoutes.post('/properties', validateProperty, propertyController.createProperty)

export default propertyRoutes;