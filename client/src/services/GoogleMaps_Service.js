/* 
https://maps.googleapis.com/maps/api/directions/json?
origin=Boston,MA&destination=Concord,MA
&waypoints=via:Charlestown,MA|via:Lexington,MA &departure_time=now
&key=YOUR_API_KEY
*/

import { apiGM_GetInfo } from "./Connections"

export const getJSONRoute = async (obj) => {
    const { origin, destination, waypoints } = obj
    const response = await apiGM_GetInfo.get(
        `origin=${origin}&destination=${destination}&waypoints=${waypoints}&key=${process.env.TOKEN_GEO_GOOGLEMAPS}`
    )
    console.log("Response", response)
}