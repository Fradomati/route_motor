import React, { useContext, useState, useEffect } from "react"
import { UserSessionContext } from "../../../../lib/Authentication/withAuthentication"
import { useForm } from "react-hook-form"
import { modifyFN } from "../../../services/Auth_Service"
import { userAge } from "../../../../lib/Functions/functions"


// Styles
import { MainContainer, SubContainer, InfoContainer, Title, HighText } from "./style"

export const Profile = () => {


    const [userLoaded, setUserLoaded] = useContext(UserSessionContext)

    // Check if Mode Edit is clicked
    const [edit, setEdit] = useState(false)

    const { register, handleSubmit, errors } = useForm(
        {
            mode: "onSubmit"
        }
    );
    const onSubmit = async (data) => {
        const id = userLoaded._id
        console.log(userAge(data.age))
        console.log("data", data, id)
        const responseServer = await modifyFN(data, id);

        if (responseServer.status == 417) {
            setErr(responseServer.message)
        } else {
            setUserLoaded(responseServer)
            setEdit(false)
            console.log("Usuario modificado:", userLoaded)
        }
    };

    console.log(userLoaded)



    const change = () => {
        !edit ? setEdit(true) : setEdit(false)
    }

    return (
        <MainContainer>
            <SubContainer>
                <InfoContainer>
                    <Title onClick={() => { change() }}>Perfil</Title>
                    {!edit ? (
                        <>
                            <HighText>Nombre</HighText>
                            <p>{userLoaded.username}</p>
                            <HighText>Email</HighText>
                            <p>{userLoaded.email}</p>
                            <HighText>Edad</HighText>
                            {userLoaded.age == "" ? (<p>Actualizar</p>) : (<p>{userAge(userLoaded.age)}</p>)}
                            <HighText>Bio</HighText>
                            <p>{userLoaded.bio}</p>
                            <HighText>Idioma</HighText>
                            <p>{userLoaded.language}</p>
                            <HighText>Localidad</HighText>
                            <p>{userLoaded.located}</p>
                        </>
                    ) : (
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <HighText>Nombre</HighText>
                                <input type="text" placeholder={userLoaded.username} name="username" ref={register({
                                    required: false
                                })} />
                                <HighText>Email</HighText>
                                <input type="text" placeholder={userLoaded.email} name="email" ref={register({
                                    required: false
                                })} />
                                <HighText>Edad</HighText>
                                <input type="date" placeholder={userLoaded.age} name="age" value={userLoaded.age} ref={register({
                                    required: false
                                })} />
                                <HighText>Bio</HighText>
                                <input type="text" placeholder={userLoaded.bio} name="bio" value={userLoaded.bio} ref={register({
                                    required: false
                                })} />
                                <HighText>Idioma</HighText>
                                <input type="text" placeholder={userLoaded.language} name="language" ref={register({
                                    required: false
                                })} />
                                <HighText>Localidad</HighText>
                                <input type="text" placeholder={userLoaded.located} name="located" ref={register({
                                    required: false
                                })} />
                                <p></p>
                                <input type="submit" />
                            </form>
                        )}
                    <HighText>Amigos</HighText>
                    <p>{userLoaded.friends}</p>
                </InfoContainer >
                <InfoContainer>
                    <Title>Moto</Title>
                    <HighText>Experiencia</HighText>
                    <p>{userLoaded.experience}</p>
                    <HighText>Marca</HighText>
                    <p>{userLoaded.brand}</p>
                    <HighText>Modelo</HighText>
                    <p>{userLoaded.model}</p>
                    <HighText>Cilindrada</HighText>
                    <p>{userLoaded.power}</p>
                </InfoContainer>
            </SubContainer>
        </MainContainer >
    )

}