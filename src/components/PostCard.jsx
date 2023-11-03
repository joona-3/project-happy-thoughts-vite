import { useState } from "react"
import { PostInput } from "./PostInput";

export const PostCard = ({ url, fetchThoughts }) => {
    const [postThought, setPostThought] = useState("");

    //Create a function to handle submitting a new thought
    const handleSubmit = async (event) => {
        event.preventDefault()

        //Create a function to handle submitting a new thought
        try {
            const response = await fetch(url, {
                //Options to specify the POST request
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: postThought })
            })
            //Check if the response is ok, and if so..
            if (response.ok) {
                //..add it to the variable newThought
                const newThought = await response.json();
                // console.log("new thought added", newThought.message)
                //.. and set the new state with the new post appended to the beginning of the array
                setPostThought((previousThought) => [newThought.message, ...previousThought]);
                // Wait for all the thoughts to be fetched, including the new one
                await fetchThoughts();
            }
        } catch (error) {
            //Log any potential errors
            console.log("Error fetching data:", error);
        } finally {
            //Set the state to an empty string to clear the input textbox
            setPostThought("");
        }
    }

    //Function to set the state to the retrieved value from the text-input
    const handleInputChange = (event) => {
        setPostThought(event.target.value)
    };

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