import {jwtDecode} from "jwt-decode"

export const isValid=()=>{
    const token = localStorage.getItem('token')
    if (!token){
        return false
    }
    const body = jwtDecode(token)
    console.log(body)
    const exp = new Date((body.exp)*1000)
    return exp >= new Date()
}

export const getName = () =>{
    const token = localStorage.getItem('token')
    if (!token){
        return ""
    }
    const body = jwtDecode(token)
    const name = body.name
    return name
}