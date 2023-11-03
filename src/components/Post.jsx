import { useEffect, useState } from "react"
import { PostInput } from "./PostInput";

export const Post = () => {
    const url = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts"
    const [postThought, setPostThought] = useState("");
    const [loading, setLoading] = useState(false);




    const handleSubmit = async (event) => {
        event.preventDefault()


        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: postThought })
            })
            if (!response.ok) {
                throw new Error("failed to fetch data")
            }
            const newThought = await response.json()
            console.log("new thought added", newThought.message)

            setPostThought((previousThought) => [newThought.message, ...previousThought])
        } catch (error) {
            console.error("Error fetching data:", error)
        } finally {
            setPostThought("");
        }
    }

    const handleInputChange = (event) => {
        setPostThought(event.target.value)
    };

    // useEffect(() => {
    //     const renderThoughts = async () => {
    //         try {
    //             const response = await fetch(url)
    //             if (response.ok) {
    //                 const data = await response.json();
    //                 setListThoughts(data);
    //             }
    //         } catch (error) {
    //             console.log("Error", error)
    //         }
    //     }
    //     renderThoughts();
    // }, [postThought]);



    return (
        <div className="post-card">
            <PostInput
                inputValue={postThought}
                handleSubmit={handleSubmit}
                handleInputChange={handleInputChange}
            />
        </div>
    )

}