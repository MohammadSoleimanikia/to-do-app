function NewTask(props){
    return (
    <form className="new-task-container flex-center" onSubmit={props.onSubmit}>
        <input type="text" placeholder={props.placeholder} onChange={props.onChange} value={props.value} ></input>
        <button className="add-task-btn" type={props.type}>ADD</button>
    </form>
    )
}
export default NewTask;