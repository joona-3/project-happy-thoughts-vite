import { useState } from "react";

export const Like = ({ id, hearts, updateTotalLikes }) => {
    const heartsUrl = `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${id}/like`;
    const [likeThought, setLikeThought] = useState(hearts);
    const [myLikes, setMyLikes] = useState(false);
    // const [storeLikes, setStoreLikes] = useState(null);

    //Function to handle like-button
    const handleLikeBtn = async () => {
        try {
            const response = await fetch(heartsUrl, {
                method: 'POST',
            });
            if (response.ok) {
                //Increase the hearts by 1 and add it to the new state
                setLikeThought((previousLikes) => previousLikes + 1);
                //Set state to show what messages I have liked
                setMyLikes(true);
                //Call function to update the totalLikes-state
                updateTotalLikes(1);
            };
        } catch (error) {
            console.log("Error:", error);
        }
    };

    return (
        <div className="like">
            <button onClick={handleLikeBtn}><span className="emoji">{myLikes ? `💖` : `❤️`}</span></button>
            <p>x{likeThought}</p>
            {/* <p>Total likes: {storeLikes}</p> */}
        </div>
    );
};