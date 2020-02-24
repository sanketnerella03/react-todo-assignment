import React from 'react';
import { Link } from 'react-router-dom';
import TaskList from '../task-list/task-list.component';

const TaskListItem = ({...itemProps}) => {
    return(
        <div>
            Task List Item {`${itemProps.title} id ${itemProps.id}`}
            <Link to={`form`}/></Link>
            <div>
            {
                itemProps.tasks && itemProps.tasks.length > 0 ? (
                    <TaskList tasks={itemProps.tasks} />
                ) : null
            }
            </div>
        </div>
    );
}

export default TaskListItem;