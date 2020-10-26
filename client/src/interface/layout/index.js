import React from "react"


// Styles
import { GlobalContainer, MainContentContainer } from "./style"

// NavBar
import { NavBar } from "../navbar/index"

export const Layout = ({ children }) => {

    // INTRODUCIR AQUÍ LA DIFERENCIACIÓN ENTRE USUARIO LOGGED O LOGOUT . DOS PANTALLAS, UNA CON EL MENÚ A LA DERECHA O SIN MENÚ

    return (
        <GlobalContainer>
            <NavBar />
            <MainContentContainer>
                {children}
            </MainContentContainer>
        </GlobalContainer>
    )
}