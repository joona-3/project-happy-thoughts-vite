export const PostInput = ({ inputValue, handleSubmit, handleInputChange }) => {

    return (
        <div className="add-post">
            <form id="form" onSubmit={handleSubmit}>
                <label>
                    Write your happy thoughts here
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                </label>
            </form>

        </div>
    )

}