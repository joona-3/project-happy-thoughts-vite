export const PostInput = ({ inputValue, handleSubmit, handleInputChange }) => {

    return (
        <div className="add-post">
            <form id="form">
                <h2>What is making you happy right now?</h2>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <button onClick={handleSubmit}>💜 Send Happy Thought 💜</button>
            </form>

        </div>
    )
}