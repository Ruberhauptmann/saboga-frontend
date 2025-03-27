// Function to get the full image URL
import {apiBaseUrl} from "./apiService.tsx";

const defaultImage = "/img/placeholder.jpg";

const getImageUrl = (imageurl: string | null) => {
    return imageurl ? `${apiBaseUrl}${imageurl}` : `${apiBaseUrl}${defaultImage}`;
};

export default getImageUrl;