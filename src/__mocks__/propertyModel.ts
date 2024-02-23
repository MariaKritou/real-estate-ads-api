const mockPropertyModel = {
    find: jest.fn().mockResolvedValue([{ /* mock properties data */ }]),
    save: jest.fn().mockImplementation(function(this: any) { return this; }),
};

export default mockPropertyModel;