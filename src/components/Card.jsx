import { Message } from "./Message";
import { Like } from "./Like";
import { TimeIndication } from "./TimeIndication";

export const Card = ({ id, message, hearts, time }) => {
    

    return (
        <section className="recent-message" key={id}>
            <Message message={message} />
            <div className="wrapper-info">
            <Like id={id} hearts={hearts} />
            <TimeIndication time={time} />
            </div>
        </section>

    )
}


