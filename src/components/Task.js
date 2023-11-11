function Task(props)
{
    return(
        <div className="Task">
        <div className="flex">
            <input type="checkbox" checked={props.checked} onChange={props.onChange}/>
            <p>{props.text}</p>
        </div>
        <button className="task-btn" onClick={props.onClick}>remove</button>
        </div>
    )
}
export default Task