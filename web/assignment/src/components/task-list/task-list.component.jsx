import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import TaskListItem from '../task-list-item/task-list-item.component';
import './task-list.styles.css';
import {
    faPlusCircle
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddFormComponent from '../add-form/add-form.component';
import Axios from 'axios';
const TaskList = ({ tasks, rootTaskId, history }) => {
    const [createBlock, toggleCreateBlock] = useState(false);
    const toggleCreateRequest = () => {
        toggleCreateBlock(!createBlock);
    }
    const handleCreateRequest = ({title, dueDate}) => {
        const url = `http://localhost:3000/tasks${(rootTaskId ? '/' + rootTaskId : '')}`
        console.log("Creating url", url, title, dueDate);
        const reqBody = {
            title: title,
            dueDate: dueDate,
            status: false
        }
        Axios.post(url, reqBody).then((response) => {
            console.log("success creating");
            history.push('/');
        }).catch((error) => {
            console.log("Error Creating Task", error);
        });
    }
    return (
        <div>
            <ul className="list-group">
                {/* {rootTaskId ? */}
                <li className='list-group-item'>
                    <div className='shadow rounded' style={{'padding': '5px 0px', 'textAlign': 'center'}}>
                        <button onClick={toggleCreateRequest} className="btn btn-primary">
                            <FontAwesomeIcon icon={faPlusCircle} />
                        </button>
                        <span className='add-text-section'>
                            { rootTaskId ? 'Add Sub Task' : 'Add Task' }
                        </span>
                        {
                            createBlock ? (
                                <AddFormComponent handleCreateRequest={handleCreateRequest} />
                            ) : null
                        }
                    </div>

                </li>
                {/* } */}
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