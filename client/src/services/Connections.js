import axios from "axios";

// URL to do endpoint to mapbox and get coordinates of routes
const urlDirections = "https://api.mapbox.com/directions/v5/mapbox";
// URL to do endpoint to mapbox and get coordinates from URL google Maps 
const urlGeocoding = "https://api.mapbox.com/geocoding/v5/mapbox.places"


// Auth Connection
export const authService = axios.create({
    baseURL: `${process.env.BACKEND_URL}/auth`,
    withCredentials: true
})

// Map Connection
export const apiMaps = axios.create({
    baseURL: `${urlDirections}/driving`
});

// Geocoding Connection 

export const apiGeocoding = axios.create({
    baseURL: `${urlGeocoding}`
})


