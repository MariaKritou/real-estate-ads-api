// Import the necessary modules and functions
import propertyService from './propertyService'; // Update the path accordingly
const PropertyModel = require('../models/propertyModel');

jest.mock('../models/propertyModel', () => ({
  // Mocking the static `find` method
  find: jest.fn().mockResolvedValue([{ title: 'Existing Property', type: 'rent' }]),
  // Returning a mock function for the constructor, which itself returns an object with a `save` method
  __esModule: true, // This line is crucial for mocking ES Module exports
  default: jest.fn().mockImplementation(() => ({
    save: jest.fn().mockResolvedValue(true) // Simulating successful save on instance
  }))
}));


describe('Property Service', () => {

  describe('getAllProperties', () => {
    it('should return all properties', async () => {
      const mockProperties = [{ title: 'Test Property 1' }, { title: 'Test Property 2' }];
      const properties = await propertyService.getAllProperties();
      expect(properties).toEqual(mockProperties);
    });

    it('should throw an error if fetching properties fails', async () => {
      PropertyModel.find.mockRejectedValue(new Error('Database Error'));

      await expect(propertyService.getAllProperties())
        .rejects
        .toThrow('Failed to fetch properties.');
    });
  });

  describe('createProperty', () => {
    it('should create a new property', async () => {
      const newPropertyData: any = { title: 'New Property', type: 'rent' };
      const mockSave = jest.fn().mockResolvedValue(newPropertyData);

      // Mock the constructor function to return an object with a mocked save method
      PropertyModel.mockReturnValue({ save: mockSave });

      const result = await propertyService.createProperty(newPropertyData);
      expect(result).toEqual(newPropertyData);
      expect(mockSave).toHaveBeenCalled(); // Ensures save was called
    });
    it('should throw an error if saving the property fails', async () => {
      // Mock the constructor to return an object with a mocked save method that rejects
      const mockSave = jest.fn().mockRejectedValue(new Error('Database Error'));
      PropertyModel.mockImplementation(() => ({ save: mockSave }));

      const newPropertyData: any = { title: 'Failing Property', type: 'buy' }; 

      await expect(propertyService.createProperty(newPropertyData))
        .rejects
        .toThrow('Failed to save property.');

      // Verify that save was called
      expect(mockSave).toHaveBeenCalled();
    });
  });

});
