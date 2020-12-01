import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { urlToCoords, getDirectionsObj } from "../../../lib/Functions/functions"
import { GoogleMapsPreview } from "./embed_maps"



export const TestGoogeMapsView = (props) => {

    const [coords, setCoords] = useState()

    const { register, handleSubmit, errors } = useForm(
        {
            mode: "onSubmit"
        }
    );


    const filterURL = (data) => {

        const arrPlaces = urlToCoords(data.place)
        console.log(arrPlaces)
        // Remove the last element of arrPlaces because its the Center Coords
        arrPlaces.pop()
        // Get the object necessary to Google Maps Embed
        const objDirections = getDirectionsObj(arrPlaces)
        console.log(objDirections)
        setCoords(objDirections)

    }

    return (
        <div>
            <form onSubmit={handleSubmit(filterURL)}>
                <p>Introduce URL MAPA aquí</p>
                <input type="text" name="place" ref={register({
                    required: false
                })} />
                <input type="submit" />
            </form>

            <GoogleMapsPreview coords={coords} />

        </div>
    )
}