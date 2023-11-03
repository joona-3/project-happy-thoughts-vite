import { useState, useEffect } from "react";
import { PostCard } from "./PostCard";
import { Card } from "./Card";

export const HappyThoughts = () => {

    const url = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

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

    const renderThoughts = () => (
        //Map through the data to get the individual objects and their keys
        data.map(
            ({ _id, message, hearts, createdAt }) => (
                <section key={_id}>
                    <Card
                        id={_id}
                        message={message}
                        hearts={hearts}
                    />
                </section>
            ))
    );

    //Fetch thoughts when site is mounted
    useEffect(() => {
        fetchThoughts();
    }, []);


    return (
        <div>
            <PostCard
                url={url}
                fetchThoughts={fetchThoughts}
            />
            {(loading === true) && <p>Loading thoughts...</p>}
            {renderThoughts()}
        </div>
    );
};