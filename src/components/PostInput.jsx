export const PostInput = ({ inputValue, handleSubmit, handleInputChange }) => {

    return (
        <div className="add-post">
            <form id="form">
                <label>
                    What is making you happy right now?
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                </label>
                <button onClick={handleSubmit}>💜 Send Happy Thought 💜</button>
            </form>

        </div>
    )

}