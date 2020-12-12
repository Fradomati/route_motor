import React, { useState, useEffect } from "react"

// Styles
import { IFrame } from "./style"

const token = process.env.TOKEN_API_GOOGLEMAPS
const URLBase = "https://www.google.com/maps/embed/v1/directions?key="

export const GoogleMapsPreview = (props) => {
    const [origin, setOrigin] = useState()
    const [destination, setDestination] = useState()
    const [waypoints, setWaypoints] = useState()


    useEffect(() => {
        if (props.coords) {
            setOrigin(props.coords.origin) // Origin Point
            setDestination(props.coords.destination) // Destination Point

            let strgWaypoints = "" // Format to Google Maps Waypoints
            if (props.coords.waypoints) { // Conditional if there are waypoints or only Origin and Destination

                props.coords.waypoints.forEach(point => {
                    strgWaypoints == "" ? strgWaypoints = point : strgWaypoints = strgWaypoints + "|" + point
                })
                setWaypoints(strgWaypoints)
            }
        }





    }, [props])




    return (

        origin ?
            (<IFrame
                src={`${URLBase}${token}&origin=${origin}&destination=${destination}&waypoints=${waypoints}`}
            >
            </IFrame >)
            : (<div>Esperando Ruta...</div>)
    )
}