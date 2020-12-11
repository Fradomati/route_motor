/* ------- ADD ROUTE PAGE ------- */
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { urlToCoords, getDirectionsObj } from "../../../../lib/Functions/functions"
import { GoogleMapsPreview } from "../../../components/GoogleMaps/embed_maps"

// Styles
import { ParentContainer, ChildContainer, CenterContainer } from "../../global_styles"
import {
    TitleContainer,
    TitlePage,
    AddURLContainer,
    TitleRoute,
    URLMapContainer,
    URLInput,
    Submit,
    ButtonGM,
    MapContainer
} from "./style"


export const AddRoute = (props) => {

    const [coords, setCoords] = useState()
    const { register, handleSubmit } = useForm({
        mode: "onSubmit"
    })

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
        <ParentContainer>
            <ChildContainer>

                <CenterContainer>
                    <TitleContainer>
                        <TitlePage>Añadir Nueva Ruta</TitlePage>
                    </TitleContainer>
                    <AddURLContainer>
                        <TitleRoute>Título</TitleRoute>
                        <URLMapContainer onSubmit={handleSubmit(filterURL)}>
                            <URLInput type="text" name="place" ref={register({
                                required: false
                            })} /><Submit type="submit" /><ButtonGM>Ir a Google Maps</ButtonGM>
                        </URLMapContainer>
                    </AddURLContainer>
                </CenterContainer>
            </ChildContainer>
            <ChildContainer>
                <CenterContainer>
                    <MapContainer>
                        <GoogleMapsPreview coords={coords} />
                    </MapContainer>
                </CenterContainer>
            </ChildContainer>
        </ParentContainer>
    )
}