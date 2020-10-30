import { authService } from "./Connections"
import { getUserName } from "../../lib/Signup/getUserName"

export const signupFn = async ({ mail, password }) => {
    let email = mail.toLowerCase()
    const username = getUserName(email) // Get username from email
    const response = await authService.post("/signup", {
        email,
        username,
        password
    })

    return response.data
}

export const loginFn = async ({ mail, password }) => {
    let email = mail.toLowerCase()
    const response = await authService.post("/login", {
        email,
        password
    }
    )
    return response.data
}

export const whoameFN = async () => {
    const response = await authService.get("/whoame")
    return response.data
}