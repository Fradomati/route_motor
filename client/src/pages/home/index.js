import React from "react"
import { Test_map } from "../../components/test_map"

export const Home = () => {
    return (
        <div>
            <Test_map />
            <div> Aquí podrás ver las rutas disponibles </div>
            <div> Quízas dividido en dos vistas, una que apenas puedas interactuar pero sí ver las rutas creadas</div>
            <div>Y otra vista donde ya estés dado de alta.</div>
        </div>
    )
}