import { useEffect, useState } from "react"

const useUser=email=>{
    const [isUser,setUser]=useState(false)
    const [UserLoading,setUserLoading]=useState(true)
    useEffect(()=>{
        fetch(`https://assignment-12-server-gold-five.vercel.app/user/user/${email}`)
        .then(res =>res.json())
        .then(data=>{
            setUser(data.isAdmin)
            setUserLoading(false)
        })
    },[email])
    return [isUser,UserLoading]
}
export default useUser