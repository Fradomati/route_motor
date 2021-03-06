/* ------- ADD ROUTE PAGE ------- */
import React, { useState, useEffect, useMemo } from "react"
import { Link } from "react-router-dom"
import { withRouter } from "react-router-dom"
import { useForm } from "react-hook-form"
import { urlToCoords, getDirectionsObj } from "../../../../lib/Functions/functions"
import { GoogleMapsPreview } from "../../../components/GoogleMaps/embed_maps"
import { getJSONRoute } from "../../../services/GoogleMaps_Service"
import { TextRichDescription } from "../../../components/RichTextArea/index-quill.js"


// Styles
import { ParentContainer, CenterContainer, LeftContainer, RightContainer, SpaceBetweenContainer, Container } from "../../global_styles"
import {
    TitleContainer,
    TitlePage,
    AddURLContainer,
    TitleRoute,
    URLMapForm,
    URLInput,
    ButtonSubmit,
    ButtonGM,
    ButtonAdd,
    MapContainer,
    DataContainer,
    RouteDataForm,
    DataInput,
    HighText,
    Select,
} from "./style"


export const AddRoute = withRouter(({ history }, props) => {

    const [coords, setCoords] = useState()
    const [dataRoute, setDataRoute] = useState()
    const [description, setDescription] = useState("Nothing")
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

    const addNewRoute = () => {
        console.log("bye!")
        location.reload()
    }

    const createRoute = (data) => {
        console.log("Route Added", data)
    }

    useEffect(() => { console.log("Parent Description", description), [description] })

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
            {!coords ? (
                <CenterContainer>
                    <Container>
                        <TitleContainer>
                            <TitlePage>Añadir Nueva Ruta</TitlePage>
                        </TitleContainer>
                        <AddURLContainer>
                            <TitleRoute>Introduce URL de Google Maps:</TitleRoute>
                            <URLMapForm onSubmit={handleSubmit(filterURL)}>
                                <URLInput type="text" name="place" ref={register({
                                    required: false
                                })} /><ButtonSubmit type="submit" /><ButtonGM>Ir a Google Maps</ButtonGM>
                            </URLMapForm>
                        </AddURLContainer>
                    </Container>
                </CenterContainer>
            ) : (
                    <CenterContainer>
                        <Container>
                            <TitleContainer>
                                <TitlePage>Añadir Nueva Ruta</TitlePage>
                            </TitleContainer>
                            <AddURLContainer>
                                <button type="button" onClick={() => addNewRoute()}>Volver</button>
                            </AddURLContainer>
                            <TitleRoute>Título</TitleRoute>
                        </Container>
                    </CenterContainer>
                )
            }
            {coords
                ? (
                    <RouteDataForm>
                        <SpaceBetweenContainer>
                            <DataContainer>
                                {dataRoute
                                    ? (

                                        <ul>
                                            <li><HighText>Distancia</HighText>
                                                <DataInput type="text" name="distance" value={`${Math.floor(dataRoute.totalDistance)}`} ref={register({
                                                    required: false
                                                })} />
                                            </li>
                                            <li><HighText>Duración</HighText>
                                                <DataInput type="text" name="distance" value={`${dataRoute.totalDuration.hour}h:${dataRoute.totalDuration.min}m`} ref={register({
                                                    required: false
                                                })} />
                                            </li>
                                            <li><HighText>Localidad</HighText>
                                                <DataInput type="text" name="distance" defaultValue={dataRoute.locality} ref={register({
                                                    required: false
                                                })} />
                                            </li>
                                            <li><HighText>Tipo de Motos</HighText>
                                                <DataInput type="text" name="distance" defaultValue={dataRoute.startPoint} ref={register({
                                                    required: false
                                                })} />
                                            </li>
                                            <li><HighText>Estilo de Ruta</HighText>
                                                <DataInput type="text" name="distance" defaultValue={dataRoute.startPoint} ref={register({
                                                    required: false
                                                })} />
                                            </li>
                                            <li><HighText>Dificultad</HighText>
                                                <Select name="Title" ref={register({ required: true })}>
                                                    <option value="easy">Fácil</option>
                                                    <option value="medium">Normal</option>
                                                    <option value="hard">Difícil</option>
                                                </Select>
                                            </li>
                                            <li><HighText>Punto de Salida Recomendado</HighText>
                                                <DataInput type="text" name="distance" defaultValue={dataRoute.startPoint} ref={register({
                                                    required: false
                                                })} />
                                            </li>
                                        </ul>

                                    )
                                    : <p>Cargando Datos...</p>}
                            </DataContainer>
                            <MapContainer>
                                <GoogleMapsPreview coords={coords} />
                            </MapContainer>
                        </SpaceBetweenContainer>
                        <LeftContainer>
                            <TextRichDescription setDescription={setDescription} />
                        </LeftContainer>
                        <RightContainer>
                            <ButtonAdd type="submit" value="Agregar Ruta" />
                        </RightContainer>
                    </RouteDataForm>
                )
                : (<div>Holi</div>)}
        </ParentContainer >
    )
})