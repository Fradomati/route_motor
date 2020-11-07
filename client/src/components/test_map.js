import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { getCoords } from "../services/Map_Service"


export const MapsEmbebed = () => {

    const [map, setMap] = useState()

    const { register, handleSubmit, errors } = useForm(
        {
            mode: "onSubmit"
        }
    );

    const filterURL = async (data) => {
        console.log(data.url)
        const place = await getCoords(data.place)
        const places = place.data.features
        console.log("Place:", places)
        const namesPlace = []
        places.forEach(x => {
            namesPlace.push(x.place_name)
        })
        console.log(namesPlace)
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
        </div>
    )

}