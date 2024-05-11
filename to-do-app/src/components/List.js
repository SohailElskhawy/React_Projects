import { ToDo } from "./ToDo";
export const List = ({tasks, onDeleteTask,onTaskDone}) => {
    const handleDeleteTask = (taskToDelete) => {
        onDeleteTask(taskToDelete);
    }
    const handleTaskDone = (taskToDone) => {
        onTaskDone(taskToDone);
    }
    return (
        <div className="list">
            {tasks.map((task, index) => (
                <ToDo
                    key={index}
                    task={task.task}
                    done={task.done}
                    onDeleteTask={handleDeleteTask}
                    onTaskDone={handleTaskDone}
                />
            ))}
        </div>
    );
}