import axios from "axios"
console.log("Process.env", process.env.BACKEND_URL)

export const authService = axios.create({
    baseURL: `${process.env.BACKEND_URL}/auth`,
    withCredentials: true
})