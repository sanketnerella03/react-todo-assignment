import React from 'react';
import { withRouter } from 'react-router-dom';
import TaskListItem from '../task-list-item/task-list-item.component';
import './task-list.styles.css';
import {
    faPlusCircle
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const TaskList = ({ tasks, rootTaskId, history }) => {
    const handleNewSubTask = () => {
        // history.push({
        //     pathName
        // })
    }
    return (
        <div>
            <ul className="list-group">
                {rootTaskId ?
                    (<li className='list-group-item'>
                        <div className='shadow rounded'>
                            <button className="btn">
                                <FontAwesomeIcon icon={faPlusCircle} />
                            </button>
                            <span className='add-text-section'>
                                Add Sub Task
                            </span>
                        </div>

                    </li>) : null
                }
                {
                    tasks && tasks.length > 0 ?
                        (tasks.map(({ ...taskProps }) => (
                            <li key={taskProps.id} className="list-group-item">

                                <TaskListItem {...taskProps} />
                            </li>
                        ))) : null
                }
            </ul>
        </div>
    );
}

export default withRouter(TaskList);