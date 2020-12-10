import { apiGM_GetInfo } from "./Connections"
import { getSumKLM, getSumDuration } from "../../lib/Functions/functions"

export const getJSONRoute = async (obj) => {
    const { origin, destination, waypoints } = obj
    const response = await apiGM_GetInfo.get(
        `json?origin=${origin}&destination=${destination}&waypoints=${waypoints}&key=${process.env.TOKEN_GEO_GOOGLEMAPS}`, {
    }
    )
    console.log("Response", response)

    const route = response.data.routes[0].legs
    const arrDistances = route.map(e => {
        return e.distance.value
    })
    const arrTiming = route.map(e => {
        return e.duration.value
    })

    const totalDistance = getSumKLM(arrDistances)
    const totalDuration = getSumDuration(arrTiming)

    return { infoRoute: route, totalDistance: totalDistance, totalDuration: totalDuration }
}