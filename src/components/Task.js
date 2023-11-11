function Task(props)
{
    return(
        <div className={`Task${props.checked ? '-completed' : ''}`}>
            <label className="flex">
            <input type="checkbox" checked={props.checked} onChange={props.onChange}/>
            <p style={{}} className={props.checked ? 'completed' : ''}>{props.text}</p>
            </label>
        <button className="task-btn" onClick={props.onClick}>remove</button>
        </div>
    )
}
export default Task