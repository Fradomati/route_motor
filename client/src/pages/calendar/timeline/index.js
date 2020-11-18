import React from "react"

// Styles
import { ParentContainer, CenterContainer } from "../../global_styles"
import { FilterContainer, FilterSection, AlternativeContainer, DayContainer, DescriptionDay, PreviewMap } from "./style"



export const CalendarTimeline = () => {


    return (
        <ParentContainer>
            <CenterContainer>
                <FilterContainer>
                    <FilterSection>Calendar</FilterSection>
                    <FilterSection>Filters</FilterSection>
                    <FilterSection>Add more</FilterSection>
                </FilterContainer>
                <AlternativeContainer>
                    <DayContainer>
                        <DescriptionDay>Descripción</DescriptionDay>
                        <PreviewMap>Map</PreviewMap>
                    </DayContainer>
                </AlternativeContainer>
            </CenterContainer>
        </ParentContainer>)
}