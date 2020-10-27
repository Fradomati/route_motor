import React, { useContext } from "react"


// Styles
import { GlobalContainer, MainContentContainer } from "./style"

// NavBar
import { NavBar } from "../navbar/index"

// Context
// import { UserSessionContext } from "../../../lib/Authentication/withAuthentication"


export const Layout = ({ children }) => {

    //  const [userLoaded, setUserLoaded] = useContext(UserSessionContext)

    // INTRODUCIR AQUÍ LA DIFERENCIACIÓN ENTRE USUARIO LOGGED O LOGOUT . DOS PANTALLAS, UNA CON EL MENÚ A LA DERECHA O SIN MENÚ

    return (
        <GlobalContainer>
            {/* {userLoaded && ( */}
            <NavBar />
            {/*  )}   */}
            <MainContentContainer>
                {children}
            </MainContentContainer>
        </GlobalContainer>
    )
}