import React from 'react';
import TaskListItem from '../task-list-item/task-list-item.component';

const TaskList = ({tasks, updateTasksList}) => {
    return (
        <div>
            {
                tasks.map(({...taskProps}) => (
                    <TaskListItem key={taskProps.id} {...taskProps} />
                ))
            }
        </div>
    );
}

export default TaskList;