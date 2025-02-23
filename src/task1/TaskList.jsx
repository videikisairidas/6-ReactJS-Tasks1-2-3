import React, { useState } from 'react';
import Task from './task';
import AddTask from './AddTask';

const TaskList = () => {
    const [tasks, setTasks] = useState([
        { 
            id: 1,
            text:"hello aaaaaaaaaa",
            status: "progress"
        },
        { 
            id: 2,
            text:"hello3 wwwwwww",
            status: "ssssprogress"
        }
    ])

    const addTask = (task) => {
        setTasks([...tasks, {text: task, status:"waiting"}]);
    }

    const updateStatus = (index, status) => {
        const newTasks = [...tasks];
        newTasks[index].status = status;
        setTasks(newTasks);
      };


    return (
        <div>
            task LIST
            <AddTask addTask={addTask} />
            <div>
            {tasks.map((task, index) => (
                    <Task
                        key={task.id}
                        task={task}
                        index={index}
                        updateStatus={updateStatus}
                    />  
                ))}
            </div>
        </div>
    );
}

export default TaskList;