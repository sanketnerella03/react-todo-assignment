import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./task-list-item.styles.css";
import TaskList from "../task-list/task-list.component";
import {
  faEdit,
  faTrashAlt,
  faFolderPlus
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';


const TaskListItem = withRouter(({ history, ...itemProps }) => {
    const handleAddRequest = () => {
        console.log("Add clicked");
        history.push('/task/new');
      };
      const handleEditRequest = () => {
        console.log("Edit clicked");
        history.push(`/task/${itemProps.id}`)
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
    <div>
      {/* Task List Item {`${itemProps.title}`}
      <Link to={`task/${itemProps.id}`}>{itemProps.id}</Link> */}
      <div>
        <span>Title: </span>
        <span>{itemProps.title}</span>
      </div>
      <div>
        <span>Status: </span>
        <span>{itemProps.status ? "Completed" : "Not Completed"}</span>
      </div>
      <div>
        <span>Due Date: </span>
        <span>{itemProps.dueDate}</span>
      </div>
      <div className="action-items">
        <button onClick={handleAddRequest}>
          <FontAwesomeIcon icon={faFolderPlus} />
        </button>
        <button onClick={handleEditRequest}>
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button onClick={handleDeleteRequest}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </div>
      {itemProps.tasks && itemProps.tasks.length > 0 ? (
        <TaskList tasks={itemProps.tasks} />
      ) : null}
    </div>
  );
});

export default TaskListItem;
