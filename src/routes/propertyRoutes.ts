import express from 'express';
import propertyController from '../controllers/propertyController';
import validateProperty from '../middlewares/validateProperty';

const propertyRoutes = express.Router();

// Route to get all properties. 
propertyRoutes.get('/properties', propertyController.getAllProperties)

// Route to create a new property.
// The validateProperty middleware is used to validate the property data before it's processed
// by the createProperty method in the property controller.
propertyRoutes.post('/properties', validateProperty, propertyController.createProperty)

// Route to get location suggestions based on a search string.
propertyRoutes.get('/properties/locations', propertyController.getLocationSuggestions)

export default propertyRoutes;