import { apiMaps, apiGeocoding } from "./Connections"



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

export const getCoords = async (place) => {
    const response = await apiGeocoding.get(
        `/${place}.json?access_token=${token}`
    )

    return response
}

