function TaskContainer(props){

    return (
    <>
    <div class="Task-container flex-center">
        {props.children}
    </div>
    </>
    )
}
export default TaskContainer;