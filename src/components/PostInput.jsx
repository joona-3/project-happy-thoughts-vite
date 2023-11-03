export const PostInput = ({ inputValue, handleSubmit, handleInputChange }) => {

    return (
        <div className="add-post">
            <form id="form">
                <h2>What is making you happy right now?</h2>
                <textarea
                    rows="3"
                    placeholder="'If music be the food of love, play on.' – William Shakespeare"
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <button onClick={handleSubmit}><span className="emoji">❤️</span> Send Happy Thought <span className="emoji">❤️</span></button>
            </form>

        </div>
    )
}