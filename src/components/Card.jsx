import { Message } from "./Message";
import { Like } from "./Like";
// import { TimeIndicaton } from "./TimeIndication";

export const Card = ({ id, message, hearts, time, updateTotalLikes }) => {

    return (
        <section className="recent-message" key={id}>
            <Message message={message} />
            <div className="wrapper-info">
            <Like id={id} hearts={hearts} updateTotalLikes={updateTotalLikes} />
            <TimeIndication time={time} />
            </div>
        </section>

    );
};


