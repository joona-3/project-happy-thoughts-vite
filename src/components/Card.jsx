import { useState, useEffect } from "react"
import { Message } from "./Message";
import { Like } from "./Like";
// import { TimeIndicaton } from "./TimeIndication";



export const Card = () => {
    const apiThoughtsUrl = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts"
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchThoughts = async () => {
            setLoading(true);
            try {
                const response = await fetch(apiThoughtsUrl)
                if (response.ok) {
                    const data = await response.json()
                    console.log(data)
                    setData(data)
                }
            } catch (error) {
                console.error("Error fetching data:", error)
            } finally {
                setLoading(false);
            }
        }
        fetchThoughts();
    }, [])

    const renderThoughts = () => (
        data.map(
            ({ _id, message, hearts, createdAt }) => (
                <section key={_id}>
                    {(loading === true) && <p>Loading thoughts...</p>}
                    <Message recentMessage={message} />
                    <Like id={_id} hearts={hearts} />
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


