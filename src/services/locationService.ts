import axios from "axios";
import { cache } from "./cacheClient";
import { LocationData } from "../types/locationTypes";

/**
 * Fetches location data based on a search string. This function first attempts
 * to retrieve the data from a cache. If the data is not available in the cache,
 * it makes an HTTP request to an external API to fetch the locations. The fetched
 * data is then cached for future requests.
 * 
 * @param {string} searchString - The search query used to fetch location data.
 * @returns {Promise<LocationData[]>} A promise that resolves to an array of location data.
 * @throws {Error} Throws an error if fetching locations from the external API fails.
 */
const fetchLocations = async (searchString: string): Promise<LocationData[]> => {

    // Construct a cache key using the search string for unique identification.
    const cacheKey = `locations:${searchString}`;

    // Attempt to retrieve cached data
    const cachedData: LocationData[] | undefined = cache.get(cacheKey);
    if (cachedData) {
         // If cached data exists, return it immediately without fetching from the API.
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