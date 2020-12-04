import React from "react"

// Styles
import { ParentContainer, CenterContainer } from "../../global_styles"
import {
    TitleContainer,
    TitlePage,
    AddURLContainer,
    TitleRoute,
    URLMapContainer,
    URLInput,
    ButtonSend,
    ButtonGM
} from "./style"


export const AddRoute = () => {

    return (
        <ParentContainer>
            <CenterContainer>
                <TitleContainer>
                    <TitlePage>Añadir Nueva Ruta</TitlePage>
                </TitleContainer>
                <AddURLContainer>
                    <TitleRoute>Título</TitleRoute>
                    <URLMapContainer>
                        <URLInput /><ButtonSend>Enviar</ButtonSend><ButtonGM>Ir a Google Maps</ButtonGM>
                    </URLMapContainer>
                </AddURLContainer>
            </CenterContainer>
        </ParentContainer>
    )
}