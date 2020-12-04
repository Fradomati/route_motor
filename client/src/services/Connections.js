import axios from "axios";
// axios.defaults.headers


console.log("axios", axios.defaults)
/* MAPBOX URL */

// URL to do endpoint to mapbox and get coordinates of routes
const urlDirections = "https://api.mapbox.com/directions/v5/mapbox";
// URL to do endpoint to mapbox and get coordinates from URL google Maps 
const urlGeocoding = "https://api.mapbox.com/geocoding/v5/mapbox.places"


/* GOOGLE MAPS URL */

// URL to do endpoint to Google Maps and get information about route
const urlGetInfoGM = "https://maps.googleapis.com/maps/api/directions/"




// Auth Connection
export const authService = axios.create({
    baseURL: `${process.env.BACKEND_URL}/auth`,
    withCredentials: true
})

/* MAPBOX CONNECTION */

// Map Connection
export const apiMaps = axios.create({
    baseURL: `${urlDirections}/driving`
});

// Geocoding Connection 

export const apiGeocoding = axios.create({
    baseURL: `${urlGeocoding}`
})



/* GOOGLE MAPS CONNECTION */

export const apiGM_GetInfo = axios.create({
    baseURL: `${urlGetInfoGM}`,

}, console.log(axios.defaults, "axios"))