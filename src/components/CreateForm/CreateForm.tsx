const CreateForm = ({onCloseForm}: any) => {
    return (
        <div className="form-block">
            <form action="#" className="">
                <div className="">
                    <label>Name:</label>
                    <input className="" id="name" name="name"/>
                </div>
                <div className="">
                    <label>Category:</label>
                    <input className="" list="category-list" id="category" name="category"
                           placeholder="Choose a category"
                           required/>
                    <datalist id="category-list">
                        <option value="Task"></option>
                        <option value="Idea"></option>
                        <option value="Quote"></option>
                        <option value="Random Thought"></option>
                    </datalist>
                </div>
                <div className="">
                    <label>Content:</label>
                    <textarea className="" id="content" name="content"></textarea>
                </div>
                <div className="buttons">
                    <button className="action__button" type="submit">Save</button>
                    <button className="action__button" onClick={onCloseForm}>Close</button>
                </div>
            </form>
        </div>
    )
}

export default CreateForm