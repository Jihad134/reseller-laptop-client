import { useEffect, useState } from "react"

const useAdmin=email=>{
    const [isAdmin,setAdmin]=useState(false)
    const [adminLoading,setAdminLoading]=useState(true)
    useEffect(()=>{
        fetch(`https://assignment-12-server-gold-five.vercel.app/user/admin/${email}`)
        .then(res =>res.json())
        .then(data=>{
            setAdmin(data.isAdmin)
            setAdminLoading(false)
        })
    },[email])
    return [isAdmin,adminLoading]
}
export default useAdmin