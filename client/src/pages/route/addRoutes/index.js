/* ------- ADD ROUTE PAGE ------- */
import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { urlToCoords, getDirectionsObj } from "../../../../lib/Functions/functions"
import { GoogleMapsPreview } from "../../../components/GoogleMaps/embed_maps"
import { getJSONRoute } from "../../../services/GoogleMaps_Service"


// Styles
import { ParentContainer, CenterContainer, LeftContainer, SpaceBetweenContainer, Container } from "../../global_styles"
import {
    TitleContainer,
    TitlePage,
    AddURLContainer,
    TitleRoute,
    URLMapForm,
    URLInput,
    Submit,
    ButtonGM,
    MapContainer,
    DataContainer,
    RouteDataForm,
    DataInput
} from "./style"


export const AddRoute = (props) => {

    const [coords, setCoords] = useState()
    const [dataRoute, setDataRoute] = useState()

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

    const createRoute = (data) => {
        console.log("Route Added", data)
    }

    useEffect(() => {
        // Get info of Route
        if (coords) {
            console.log("COORDS", coords)
            getJSONRoute({ origin: coords.origin, destination: coords.destination, waypoints: coords.waypoints }).then(obj => {
                console.log("info route:", obj)
                setDataRoute(obj)
            })

        }
    }, [coords])

    return (
        <ParentContainer>
            <CenterContainer>
                <Container>
                    <TitleContainer>
                        <TitlePage>Añadir Nueva Ruta</TitlePage>
                    </TitleContainer>
                    <AddURLContainer>
                        <TitleRoute>Título</TitleRoute>
                        <URLMapForm onSubmit={handleSubmit(filterURL)}>
                            <URLInput type="text" name="place" ref={register({
                                required: false
                            })} /><Submit type="submit" /><ButtonGM>Ir a Google Maps</ButtonGM>
                        </URLMapForm>
                    </AddURLContainer>
                </Container>
            </CenterContainer>
            {coords
                ? (
                    <RouteDataForm>
                        <SpaceBetweenContainer>
                            <DataContainer>
                                {dataRoute
                                    ? (

                                        <ul>
                                            <li>Distancia:</li>
                                            <DataInput type="text" name="distance" value={Math.floor(dataRoute.totalDistance)} ref={register({
                                                required: false
                                            })} />
                                            <li>Duración:</li>
                                            <DataInput type="text" name="distance" value={`${dataRoute.totalDuration.hour}h:${dataRoute.totalDuration.min}m`} ref={register({
                                                required: false
                                            })} />
                                            <li>Localidad:</li>
                                            <DataInput type="text" name="distance" value={dataRoute.locality} ref={register({
                                                required: false
                                            })} />
                                            <li>Tipo de Motos</li>
                                            <li>Permiso Mínimo</li>
                                            <li>Estilo de Ruta</li>
                                            <li>Nivel</li>
                                            <li>Punto de Salida Recomendado:</li>
                                            <DataInput type="text" name="distance" value={dataRoute.startPoint} ref={register({
                                                required: false
                                            })} />
                                        </ul>

                                    )
                                    : <p>Cargando Datos...</p>}
                            </DataContainer>
                            <MapContainer>
                                <GoogleMapsPreview coords={coords} />
                            </MapContainer>
                        </SpaceBetweenContainer>
                        <LeftContainer>
                            Description
                        </LeftContainer>
                    </RouteDataForm>
                )
                : (<div>Holi</div>)}
        </ParentContainer>
    )
}