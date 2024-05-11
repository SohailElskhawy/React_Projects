export const ToDo = ({task, done, onDeleteTask, onTaskDone}) => {
    const handleDeleteTask = () => {
        onDeleteTask(task);
    }
    const HandleTaskDone = () => {
        onTaskDone(task);
    }

    return ( 
        <div className="task">
            <input type="checkbox" className="checkBox" checked={done} onChange={HandleTaskDone}/>
            <p>{task}</p>
            <button className="delete" onClick={handleDeleteTask}>X</button>
        </div>
    );
}