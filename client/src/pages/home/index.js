import React from "react"
import { TestGoogeMapsView } from "../../components/GoogleMaps/test_GMaps"

export const Home = () => {
    return (
        <div>
            <TestGoogeMapsView></TestGoogeMapsView>
            <div> Aquí podrás ver las rutas disponibles </div>
            <div> Quízas dividido en dos vistas, una que apenas puedas interactuar pero sí ver las rutas creadas</div>
            <div>Y otra vista donde ya estés dado de alta.</div>
        </div>
    )
}