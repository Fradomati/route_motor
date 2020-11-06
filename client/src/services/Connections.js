import axios from "axios";

// URL to do endpoint to mapbox and get coordinates of routes
const url = "https://api.mapbox.com/directions/v5/mapbox";


// Auth Connection
export const authService = axios.create({
    baseURL: `${process.env.BACKEND_URL}/auth`,
    withCredentials: true
})

// Map Connection
export const apiMaps = axios.create({
    baseURL: `${url}/driving`
});


