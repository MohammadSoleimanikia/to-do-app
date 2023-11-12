function Task(props)
{
    return(
        <div className={`Task${props.completed ? '-completed' : ''}`} >
            <label className="flex">
            <input type="checkbox" checked={props.completed} onChange={props.handleCheckboxChange}/>
            <p style={{}} className={props.completed ? 'completed' : ''}>{props.text}</p>
            </label>
        <button className="remove-btn" onClick={props.handleTodoDelete}>Remove</button>
        </div>
    )
}
export default Task