import React, { useState } from 'react';

const AddTask = ({ addTask }) => {
    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!task) return;
        addTask(task);
        setTask('');
    }

    return (
        <div>
            <h2>Add Task Form</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button type="submit">Add Task</button>
            </form>
        </div>
    );
}

export default AddTask;