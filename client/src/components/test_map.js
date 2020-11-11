import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { getCoords } from "../services/Map_Service"
import { urlToCoords, arrayOfArrays } from "../../lib/Functions/functions"
import { PreviewMaps } from "../components/preview_maps"


export const Test_map = () => {

    const [map, setMap] = useState()
    const [mapCoords, setMapCoords] = useState()

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

            // Check if "e" is number or places
            if (parseInt(e.split("")[5]) >= 0) {
                // Number
                let coordPlace = ""
                e.split(",").forEach(i => {
                    // Organize Coords Lat and Lng like to order Mapbox
                    coordPlace == "" ? coordPlace = i : coordPlace = `${i},` + coordPlace
                })

                return coordPlace
            } else {
                // Place
                const response = await getCoords(e)
                const place = response.data.features
                let coordPlace = ""
                place[0].center.forEach(e => {
                    coordPlace == "" ? coordPlace = `${e},` : coordPlace = coordPlace + e
                })

                return coordPlace


            }
        })).then(e => {
            console.log("Then", e)
            let result = e
            // Fix the problem with the last element coords, example: 10,-4,23424, 40,20200 => -4,23424, 40,20200
            if (e[e.length - 1].split(",").length > 2) {
                let newValue = null
                let lastValue = e[e.length - 1].split(",")
                lastValue.shift()
                lastValue.forEach(value => newValue == null ? newValue = value + "," : newValue = newValue + value)
                result[e.length - 1] = newValue
            }
            const mapBoxCoords = arrayOfArrays(result)
            console.log("Final COORDS:", mapBoxCoords)
            // Pass the Coords to the preview map component 
            setMapCoords(mapBoxCoords)

            // Nothing
            setMap(result)
        })
            .catch(e => console.log("Catch", e))

        // return coords

    }

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
            <PreviewMaps coords={mapCoords} />

        </div>
    )

}