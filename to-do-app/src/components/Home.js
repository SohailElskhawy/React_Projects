import { List } from "./List";
import { Input } from "./Input";
import { ListAnalize } from "./ListAnalize";
import { useState } from 'react';

export const Home = () => {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);

    const handleAddTask = (newTask) => {
        const updatedTasks = [...tasks, { task: newTask, done: false }];
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }

    const handleDeleteTask = (taskToDelete) => {
        const updatedTasks = tasks.filter((task) => task.task !== taskToDelete);
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }

    const handleTaskDone = (taskToDone) => {
        const updatedTasks = tasks.map((task) => {
            if(task.task === taskToDone) {
                task.done = !task.done;
            }
            return task;
        });
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }


    return ( 
        <div className="home">
            <Input 
                onAddTask={handleAddTask}
            />
            <ListAnalize 
            numberOfDoneTasks={tasks ? tasks.filter((task) => task.done).length : 0}
            numberOfTasks={tasks ? tasks.length : 1}
            />
            <List 
                tasks={tasks ? tasks : []}
                onDeleteTask={handleDeleteTask}
                onTaskDone={handleTaskDone}
            />
        </div>
    );
}