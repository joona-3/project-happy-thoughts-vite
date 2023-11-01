import { useState, useEffect } from "react"
import { PostInput } from "./PostInput";

export const Post = () => {
    const apiPostUrl = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts"
    const [data, setData] = useState([])

    
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify({ message: "formInput"})
    }
   
    useEffect(() => {
        const fetchThoughts = async () => {
            try {
                const response = await fetch(apiPostUrl, requestOptions)
                if (!response.ok) {
                    throw new Error("failed to fetch data")
                } 
                const data = await response.json()
                setData(data)
            } catch (error) {
                console.error("Error fetching data:", error)
            }
        }
        fetchThoughts();
    }, []) 

}