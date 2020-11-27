import React, { useState, useEffect } from "react"

// Styles
import { IFrame } from "./style"

const token = process.env.TOKEN_API_GOOGLEMAPS
const URLBase = "https://www.google.com/maps/embed/v1/directions?key="

export const GoogleMapsPreview = (props) => {
    const [routeView, setRouteView] = useState()
    // Origin
    // Destination
    // Waypoints



    useEffect(() => {

    }, [])


    return (
        <IFrame
            src={`${URLBase}${token}&origin=Ávila&destination=Cuéllar&waypoints=Arévalo|Coca`}
        >

        </IFrame>
    )
}