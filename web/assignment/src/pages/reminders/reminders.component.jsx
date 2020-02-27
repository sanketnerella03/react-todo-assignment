import React, { useEffect, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import './reminders.styles.css';
import {
    faEdit
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RemindersPage = ({ history }) => {
    const { state } = useContext(AppContext);
    // useEffect(() => {
    //     console.log(state.tasks.reduce(filterDisplayList, []));
    // },[]);
    const handleEditRequest = (id) => {
        history.push(`/edit/${id}`);
    }
    const filterDisplayList = (returnArray, task) => {
        console.log("filter diplsay list", returnArray);
        if (isTaskEligible(task.dueDate)) {
            returnArray.push(task);
        }
        if (task.tasks) {
            task.tasks.forEach(subtask => {
                if (isTaskEligible(subtask.dueDate)) {
                    returnArray.push(subtask);
                }
            })
        }
        return returnArray;
    }
    const isTaskEligible = (dateString) => {
        const today = new Date();
        const todayDateString = `${today.getFullYear()}-${today.getMonth() + 1 < 10 ? ('0' + (today.getMonth() + 1)) : today.getMonth() + 1}-${today.getDate() < 10 ? ('0' + (today.getDate())) : (today.getDate())}`;

        return (dateString === todayDateString);
    }
    return (
        <div>
            <ul className='list-group'>
                {
                    state.tasks.reduce(filterDisplayList, []).map(({ ...taskProps }) => (
                        <li key={taskProps.id} className='list-group-item'>
                            <div className='shadow rounded reminder-list-item'>
                                <span>
                                    {taskProps.title}
                                </span>
                                <span>
                                    <button className="btn" onClick={() => handleEditRequest(taskProps.id)}>
                                        <FontAwesomeIcon icon={faEdit} />
                                    </button>
                                </span>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default withRouter(RemindersPage);