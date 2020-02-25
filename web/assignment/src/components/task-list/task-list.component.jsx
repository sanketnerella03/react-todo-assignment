import React from 'react';
import TaskListItem from '../task-list-item/task-list-item.component';

const TaskList = ({tasks}) => {
    return (
        <div>
            <ul className="list-group">
            {
                tasks.map(({...taskProps}) => (
                    <li key={taskProps.id} className="list-group-item">
      
                        <TaskListItem {...taskProps} />
                    </li>
                ))
            }
            </ul>
        </div>
    );
}

export default TaskList;