// Function to get the full image URL
import { apiBaseUrl } from "./apiBaseService.tsx";

const defaultImage = "/img/placeholder.jpg";

const getImageUrl = (imageurl: string | null | undefined) => {
  return imageurl ? `${apiBaseUrl}${imageurl}` : `${apiBaseUrl}${defaultImage}`;
};

export default getImageUrl;
