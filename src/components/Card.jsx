import { useState, useEffect } from "react"
import { Message } from "./Message";
// import { Like } from "./Like";
// import { TimeIndicaton } from "./TimeIndication";



export const Card = () => {
 const apiThoughtsUrl = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts"
 const [data, setData] = useState([])

 useEffect(() => {
     const fetchThoughts = async () => {
         try {
             const response = await fetch(apiThoughtsUrl)
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

 const renderThoughts = () => (
    data.map(
        ({ _id, message, hearts, createdAt }) => (
            <section key={_id}>
                <Message recentMessage={message} />
            </section>
           
        ))
 )
 

 const renderContent = renderThoughts();


  return (
    <div>
        {renderContent}
    </div>
  )
}


