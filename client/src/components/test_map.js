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

    const doCoords = async (arr) => {
        // const coords = []

        // Filtro cada elemento del Array y compruebo si son coordenadas o lugares, luego los paso a coordenadas y los
        // meto en el array de Coords
        await Promise.all(arr.map(async (e, index) => {

            // A ver si puedo hacer algo con el Index para ordenar las coordenadas tal y como vienen...
            // Check if "e" is number or places
            if (parseInt(e.split("")[0]) >= 0) {
                // Number
                let coordPlace = ""
                e.split(",").forEach(i => {
                    // Organize Coords Lat and Lng like to order Mapbox
                    coordPlace == "" ? coordPlace = i : coordPlace = `${i},` + coordPlace
                })
                console.log(e.split(","), index)

                return coordPlace
                // coords[index] = coordPlace
            } else {
                // Place
                const response = await getCoords(e)
                const place = response.data.features
                let coordPlace = ""
                place[0].center.forEach(e => {
                    coordPlace == "" ? coordPlace = `${e},` : coordPlace = coordPlace + e
                })
                console.log(e.split(","), index)

                return coordPlace
                // coords[index] = coordPlace


            }
        })).then(e => {
            console.log("Then", e)
            setMap(e)
        })
            .catch(e => console.log("Catch", e))

        // return coords

    }

    const filterURL = (data) => {

        const coordsOfPlaces = []
        let centerOfPlaces = null
        const arrPlaces = urlToCoords(data.place)

        console.log(arrPlaces)

        const coords = doCoords(arrPlaces)
        // setMap(coords)

        // console.log("Cooords!", coords)


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
        </div>
    )

}