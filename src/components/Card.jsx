import { Message } from "./Message";
import { Like } from "./Like";
// import { TimeIndicaton } from "./TimeIndication";

export const Card = ({ id, message, hearts, createdAt, updateTotalLikes }) => {

    return (
        <section key={id}>
            <Message message={message} />
            <Like id={id} hearts={hearts} updateTotalLikes={updateTotalLikes} />
        </section>

    );
};


