import { useEffect } from "react"

const useTitle=title=>{
    useEffect(()=>{
        document.title=`${title} -Laptop-Reseller`
    },[title])
}
export default useTitle