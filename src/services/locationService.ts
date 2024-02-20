import axios from "axios";

const fetchLocations = async (searchString: string) => {

    try {
        const response = await axios.get('https://4ulq3vb3dogn4fatjw3uq7kqby0dweob.lambda-url.eu-central-1.on.aws/ ', {
            params: {
            input: searchString
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