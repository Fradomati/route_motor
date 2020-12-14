import styled from "styled-components"

export const TitleContainer = styled.div`
width: 100%;

`
export const TitlePage = styled.p`
font-size: 1.8em;
color: black;
text-align: center;
`
export const AddURLContainer = styled.div`
width: 100%;
`
export const TitleRoute = styled.p`
font-size: 1.2em;
color: black;
`

export const URLMapForm = styled.form`
width: 100%;
display: flex;
justify-content: flex-start;
margin-bottom: 3em;
`
export const URLInput = styled.input`
background-color: transparent;
width: 50%;
border: none;
border-bottom: 2px solid black;
`

export const Submit = styled.input`
padding: 0.5em;
background-color: red;
margin: 0 0.3em;
width: 6.5em;
border: none;
border-radius: 5px;
color: white;
box-shadow: -1px 1px 2px 0px #1d1d1de3;
`

export const ButtonGM = styled.div`
padding: 0.5em;
background-color: green;
margin: 0 0.3em;
border: none;
border-radius: 5px;
color: white;
box-shadow: -1px 1px 2px 0px #1d1d1de3;
`

export const MapContainer = styled.div`
width: 80%;
margin: 1em
`
export const DataContainer = styled.div`
width: 80%;
margin: 1em
`
export const RouteDataForm = styled.form`
width: 100%;
`
export const DataInput = styled.input`
background-color: transparent;
width: 100%;
border: none;
color: #D32F2F;
margin-bottom: 0.5em;
margin-top: 0.5em;
font-weight: 900;
&:focus{
    outline: none;
    border-bottom: 1px solid #80808036;
    font-size: 0.8em;
    color: #ca5d5d;
}
`
export const HighText = styled.p`
font-size: 0.9em;
color: grey
`
export const Select = styled.select`
color: #D32F2F;
font-weight: bold;
border: none;
margin: 0.5em 0;
&:focus{
    outline: none;
    font-size: 0.8em;
    color: #ca5d5d;
}
`