import axios from "axios";

const fetchLocations = async (searchString: string) => {
    try {
        const response = await axios.get('', {
            params: {
                query: searchString
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching locations:', error);
        throw new Error('Failed to fetch locations');
    }
}

export default {
    fetchLocations,
}