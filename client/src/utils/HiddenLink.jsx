import { useSelector } from "react-redux"
import { selectIsLoggedIn } from "../redux/features/authSlice"

export const ShowOnLogin=({children})=>{
    const isLoggedIn=useSelector(selectIsLoggedIn)
    // console.log(isLoggedIn)
    if(isLoggedIn){
        return <>{children}</>
    }
    return null
}

export const ShowOnLogout=({children})=>{
    const isLoggedIn=useSelector(selectIsLoggedIn)
    // console.log(isLoggedIn)
    if(!isLoggedIn){
        return <>{children}</>
    }
    return null
}
