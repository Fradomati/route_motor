import React, { useContext, useState, useEffect } from "react"
import { UserSessionContext } from "../../../../lib/Authentication/withAuthentication"


export const Profile = () => {

    const [userLoaded, setUserLoaded] = useContext(UserSessionContext)

    console.log(userLoaded)

    return (
        <div>
            <p>Nombre: {userLoaded.username}</p>
            <p>Email: {userLoaded.email}</p>
            <p>Edad: {userLoaded.age}</p>
            <p>Bio: {userLoaded.bio}</p>
            <p>Localización: {userLoaded.located}</p>
            <p>Idioma: {userLoaded.language}</p>
            <p>Experiencia: {userLoaded.experience}</p>
            <p>Marca: {userLoaded.brand}</p>
            <p>Modelo: {userLoaded.model}</p>
            <p>Cilindrada: {userLoaded.power}</p>
            <p>Amigos: {userLoaded.friends}</p>
        </div>
    )

}