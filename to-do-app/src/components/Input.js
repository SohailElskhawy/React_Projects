import { useState } from 'react';
export const Input = ({onAddTask}) => {
    const [task, setTask] = useState('');
    const handleAddTask = () => {
        if(task.trim() !== '') {
            const tasks = localStorage.getItem('tasks');
            if(tasks) {
                localStorage.setItem('tasks', JSON.stringify([...JSON.parse(tasks), {task: task, done: false}]));
            } else {
                localStorage.setItem('tasks', JSON.stringify([{task: task, done: false}]));
            }
            onAddTask(task);
            setTask('');
        }

    }
    return ( 
        <div className="input">
            <input type="text" onChange={(e) => {
                setTask(e.target.value);
            }} value={task}/>
            <button onClick={handleAddTask}>Add To Do</button>
        </div>
    );
}