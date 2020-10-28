import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { signupFn } from "../../../services/Auth_Service"


// Styles
import { ContainerGlobal, ContainerPreForm, ContainerForm, InputAuth, NavAuth, ModuleAuth } from "../styles"


export const Signup = () => {

    const [err, setErr] = useState()
    const { register, handleSubmit, errors } = useForm(
        {
            mode: "onSubmit"
        }
    );
    const onSubmit = async (data) => {
        const responseServer = await signupFn(data);

        if (responseServer.status == 417) {
            setErr(responseServer.message)
        } else {
            console.log("Registrado!")
            // history.push("/login")
        }
    };


    if (errors.password) {

        console.log("Error", errors);
    }

    return (
        <ContainerGlobal>
            <ContainerPreForm className="form-signup">
                <NavAuth>
                    <ModuleAuth className="nav-left">
                        <Link to="/login">Iniciar Sesión</Link>
                    </ModuleAuth>
                    <ModuleAuth>
                        <p>Registro</p>
                    </ModuleAuth>
                </NavAuth>
                <ContainerForm onSubmit={handleSubmit(onSubmit)}>
                    <h2>Registro</h2>
                    <InputAuth type="text" placeholder="Email" name="mail" ref={register({
                        required: true, pattern: { value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i, message: "El formato de email es incorrecto" }
                    })} />
                    {errors?.mail?.message && <p>{errors?.mail?.message}</p>}

                    <InputAuth type="text" placeholder="Contraseña" name="password" ref={register({
                        required: true, min: 8,
                        pattern: { value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i, message: "Mínimo 8 caracteres con al menos 1 letra y número" }
                    })} />
                    {errors?.password?.message && <ErrorTxt>{errors?.password?.message}</ErrorTxt>}

                    <input type="submit" />
                    {err && (<TextForgot>{err}<a href="/login"> ¿Iniciar Sesión?</a></TextForgot>)}
                </ContainerForm>
            </ContainerPreForm>
        </ContainerGlobal>
    )
}