import { useState, useEffect } from "react";
import { PostCard } from "./PostCard";
import { Card } from "./Card";

export const HappyThoughts = () => {

    const url = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [totalLikes, setTotalLikes] = useState(0);

    const fetchThoughts = async () => {
        //Set loading to true when initializing the fetch
        setLoading(true);
        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                setData(data);
            }
        } catch (error) {
            console.log("Error fetching data:", error);
        } finally {
            //Set loading to false when excecution is finished
            setLoading(false);
        }
    };

    //Function to update Total Likes
    const updateTotalLikes = () => {
        setTotalLikes((previousTotalLikes) => previousTotalLikes + 1);
    };

    const renderThoughts = () => (
        //Map through the data to get the individual objects and their keys
        data.map(
            ({ _id, message, hearts, createdAt }) => (
                <section className="message-list" key={_id}>
                    <Card
                        id={_id}
                        message={message}
                        hearts={hearts}
                        time={createdAt}
                        updateTotalLikes={updateTotalLikes}
                    />
                </section>
            ))
    );

    //Fetch thoughts when site is mounted
    useEffect(() => {
        fetchThoughts();
    }, []);


    return (
        <div className="wrapper-card">
            <PostCard
                url={url}
                fetchThoughts={fetchThoughts}
            />
            {(loading === true) && <p>Loading thoughts...</p>}
            <p>Total likes: {totalLikes}</p>
            {renderThoughts()}
        </div>
    );
};