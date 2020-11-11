import React, { useState, useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import { getRoute } from "../services/Map_Service";
import { MapsEmbebed } from "./test_map"


mapboxgl.accessToken = process.env.TOKEN_MAPBOX

export const PreviewMaps = (props) => {
    const mapDiv = useRef(null);
    const [coords, setCoords] = useState()
    // const coords = [
    //     [-3.7, 40.37],
    //     [-3.7, 40.38],
    //     [-4.5875918, 41.0662344]
    // ];
    useEffect(() => {
        if (props.coords) setCoords(props.coords)
        console.log("PROPOS", props.coords)
    }, [props])

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapDiv.current,
            style: "mapbox://styles/mapbox/streets-v11",
            zoom: 5,
            center: [-3.7, 40.37]
        });

        // If I've coords show the route, else only the map
        if (coords) {

            let route = null
            getRoute(coords).then(res => {
                route = res?.data.routes[0].geometry.coordinates
                console.log("route", route);
            });
            //console.log("Test: ", response);

            // const route = response?.data.routes[0].geometry.coordinates;

            map.on("load", () => {

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
            })
        }
    }, [coords]);

    return (
        <div>
            {coords && (<div ref={mapDiv} className="mapContainer"></div>)}
            <div ref={mapDiv} className="mapContainer"></div>;
        </div>
    )
};