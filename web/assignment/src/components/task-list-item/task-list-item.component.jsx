import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "./task-list-item.styles.css";
import TaskList from "../task-list/task-list.component";
import {
  faEdit,
  faTrashAlt,
  faChevronCircleDown,
  faChevronCircleUp
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import appUtilHOC from "../../utils/hoc/app-util.hoc";

const TaskListItem = ({ history, loader, logger, popup ,...itemProps }) => {
  const [showSubTaks, toggleShowSubtask] = useState(false);
  const handleSubtaskToggle = () => {
    console.log("subtask toggle clicked");
    toggleShowSubtask(!showSubTaks);
  };
  const handleEditRequest = () => {
    console.log("Edit clicked");
    history.push(`/edit/${itemProps.id}`);
  };
  const handleDeleteRequest = () => {
    console.log("Delete clicked");
    loader.showLoader();
    axios
      .delete(`http://localhost:3000/tasks/${itemProps.id}`)
      .then(response => {
        console.log(" delete response");
        loader.hideLoader();
        popup.showPopup({title: 'Success', message: `Successfully deleted task ${itemProps.title}`}, () => {
            history.push("/");
        });
      })
      .catch(error => {
        console.log("delete error");
        loader.hideLoader();
        popup.showPopup({title: 'Error', message: `Something went wrong deleting task: ${itemProps.title}`}, () => {
            history.push("/");
        });
      });
  };
  return (
    <div className="shadow pb-10 rounded">
      <div className="content-section">
        <div className="left-section">
          <button className="btn" onClick={handleSubtaskToggle}>
            {showSubTaks ? (
              <FontAwesomeIcon icon={faChevronCircleUp} />
            ) : (
              <FontAwesomeIcon icon={faChevronCircleDown} />
            )}
          </button>
        </div>
        <div className="right-section">
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
      {showSubTaks ? (
        <div className="sub-task-section">
          <TaskList tasks={itemProps.tasks} rootTaskId={itemProps.id} />
        </div>
      ) : null}
    </div>
  );
};

export default withRouter(appUtilHOC(TaskListItem));
