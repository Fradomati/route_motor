import React from "react"
import { useForm } from "react-hook-form"
import { urlToCoords, arrayOfArrays, checkCharacter } from "../../../lib/Functions/functions"
import { GoogleMapsPreview } from "./embed_maps"



export const TestGoogeMapsView = (props) => {



    const filterURL = (data) => {

        const arrPlaces = urlToCoords(data.place)
        console.log(arrPlaces)
        doCoords(arrPlaces)

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
            {map && (<ul>{map.map((e, i) => {
                return <li key={i}>{e}</li>
            })}</ul>)}
            <GoogleMapsPreview coords={mapCoords} />

        </div>
    )
}