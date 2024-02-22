import axios from "axios";
import { cache } from "./cacheClient";
import { LocationData } from "../types/locationTypes";

const fetchLocations = async (searchString: string): Promise<LocationData[]> => {

    const cacheKey = `locations:${searchString}`;

    // Attempt to retrieve cached data
    const cachedData: LocationData[] | undefined = cache.get(cacheKey);
    if (cachedData) {
        return cachedData;
    }

    try {
        const response = await axios.get('https://4ulq3vb3dogn4fatjw3uq7kqby0dweob.lambda-url.eu-central-1.on.aws/ ', {
            params: {
                input: searchString
            },
        });

        const locations: LocationData[] = response.data;

        // Cache the newly fetched data
        cache.set(cacheKey, locations);

        return locations;
    } catch (error) {
        console.error('Error fetching locations:', error);
        throw new Error('Failed to fetch locations');
    }
}

export default {
    fetchLocations,
}