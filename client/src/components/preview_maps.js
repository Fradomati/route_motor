import React, { useState, useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import { getRoute } from "../services/Map_Service";


console.log(process.env.TOKEN_MAPBOX)
mapboxgl.accessToken = process.env.TOKEN_MAPBOX

export const PreviewMaps = (props) => {
    const test = useRef(null);
    const coor = [
        [-3.7, 40.37],
        [-3.7, 40.38],
        [-3.7, 40.39]
    ];

    useEffect(async () => {
        const map = new mapboxgl.Map({
            container: test.current,
            style: "mapbox://styles/mapbox/streets-v11",
            zoom: 5,
            center: [-3.7, 40.37]
        });

        const response = await getRoute(coor);
        console.log("Test: ", response);

        const route = response?.data.routes[0].geometry.coordinates;
        console.log(route);

        map.addLayer({
            id: "route",
            type: "line",
            source: {
                type: "geojson",
                data: {
                    type: "Feature",
                    properties: {},
                    geometry: {
                        type: "LineString",
                        coordinates: route
                    }
                }
            },
            layout: {
                "line-join": "round",
                "line-cap": "round"
            },
            paint: {
                "line-color": "#3887be",
                "line-width": 5,
                "line-opacity": 0.75
            }
        });
    }, []);

    return <div ref={test} className="mapContainer"></div>;
};