import React from 'react';

const Task = ({ task, index, updateStatus, }) => {

    const handleStatusChange = (e) => {
        updateStatus(index, e.target.value);
    };

    return (
        <div className='task'>
            <span>{task.text} - {task.status}</span>
            <select value={task.status} onChange={handleStatusChange}>
                <option value="waiting">Waiting</option>
                <option value="progress">In Progress</option>
                <option value="completed">Completed</option>
                <option value="cancel">Cancel</option>
            </select>
        </div>
    );
}

export default Task;