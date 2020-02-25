import React, {useState} from "react";
import { Link, withRouter } from "react-router-dom";
import "./task-list-item.styles.css";
import TaskList from "../task-list/task-list.component";
import {
  faEdit,
  faTrashAlt,
  faChevronCircleDown,
  faChevronCircleUp
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';


const TaskListItem = withRouter(({ history, ...itemProps }) => {
  const [showSubTaks, toggleShowSubtask] = useState(false);
  const handleSubtaskToggle = () => {
    console.log("subtask toggle clicked");
    toggleShowSubtask(!showSubTaks);
  };
  const handleEditRequest = () => {
    console.log("Edit clicked");
    history.push(`/form/${itemProps.id}`)
  };
  const handleDeleteRequest = () => {
    console.log("Delete clicked");
    axios.delete(`http://localhost:3000/tasks/${itemProps.id}`).then((response) => {
      console.log(" delete response");
      history.push(`/`);
    }).catch(error => {
      console.log("delete error");
    })
  };
  return (
    <div className='shadow pb-10 rounded'>
      {/* Task List Item {`${itemProps.title}`}
      <Link to={`task/${itemProps.id}`}>{itemProps.id}</Link> */}
      <div className='content-section'>


        <div className='left-section'>
          <button className="btn" onClick={handleSubtaskToggle}>
  { showSubTaks ? (<FontAwesomeIcon icon={faChevronCircleUp} />) : (<FontAwesomeIcon icon={faChevronCircleDown} />)}
          </button>
        </div>
        <div className='right-section'>
          <div>
            <span>{itemProps.title}</span>
          </div>

          <div>
            <span>{itemProps.dueDate}</span>
          </div>
        </div>
        <div className="action-items">
          <div>
            <span>{itemProps.status ? "Completed" : "Not Completed"}</span>
          </div>
          <div>
            <button className="btn" onClick={handleEditRequest}>
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button className="btn" onClick={handleDeleteRequest}>
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          </div>
        </div>
      </div>
      {
        showSubTaks ? 
        <div className='sub-task-section'>
          <TaskList tasks={itemProps.tasks} rootTaskId={itemProps.id} />
        </div> : null
      }
    </div>
  );
});

export default TaskListItem;
