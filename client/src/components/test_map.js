import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { getCoords } from "../services/Map_Service"
import { urlToCoords } from "../../lib/Functions/functions"


export const MapsEmbebed = () => {

    const [map, setMap] = useState()

    const { register, handleSubmit, errors } = useForm(
        {
            mode: "onSubmit"
        }
    );

    const filterURL = async (data) => {

        const coordsOfPlaces = []
        let centerOfPlaces = null
        const arrPlaces = urlToCoords(data.place)

        console.log(arrPlaces)

        const doCoords = (arr) => {
            const coords = []


            arrPlaces.forEach(e => {

                console.log(parseInt(e.split("")[1]))
                if (parseInt(e.split("")[0]) == NaN) {
                    getCoords(e).then(i => console.log(i))
                } else {
                    coords.push(e)
                }
            })

            console.log("New", coords)

        }

        doCoords(arrPlaces)

        // Hacer una función aquí que recoja el place y lo transforme en coordenadas --->
        /*
        const place = await getCoords(data.place)
        const places = place.data.features
        console.log("Place:", places)
        const namesPlace = []
        places.forEach(x => {
            namesPlace.push(x.place_name)
         })
         console.log(namesPlace)
 */

        // <----



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