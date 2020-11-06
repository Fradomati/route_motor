import { apiMaps } from "./Connections"



const token = process.env.TOKEN_MAPBOX


export const getRoute = async (coords) => {
    let coord = "";
    coords.forEach((co) => {
        coord == ""
            ? (coord = coord + co[0] + "," + co[1])
            : (coord = coord + ";" + co[0] + "," + co[1]);
    });

    const response = await apiMaps.get(
        `/${coord}?geometries=geojson&access_token=${token}`
    );
    return response;
};