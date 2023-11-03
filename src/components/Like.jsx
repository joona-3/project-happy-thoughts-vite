import { useState } from "react";

export const Like = ({ id, hearts }) => {
    const [likeThought, setLikeThought] = useState(hearts);
    const heartsUrl = `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${id}/like`;

    //Function to handle like-button
    const handleLikeBtn = async () => {
        try {
            const response = await fetch(heartsUrl, {
                method: 'POST',
            });
            if (response.ok) {
                //Increase the hearts by 1 and add it to the new state
                setLikeThought((previousLikes) => previousLikes + 1);
            };
        } catch (error) {
            console.log("Error:", error);
        }
    };

    return (
        <div className="like">
            <button onClick={handleLikeBtn}>💜</button>
            <p>x{likeThought}</p>
        </div>
    );
};