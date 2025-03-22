import createClient from "openapi-fetch";
import type {paths} from "../apischema";

// Define the base URL manually
export const apiBaseUrl = "/api/v1";

// Initialize your API client with the base URL
export const client = createClient<paths>({
    baseUrl: apiBaseUrl,
});

export default client;
