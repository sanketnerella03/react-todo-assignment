import React, { useEffect, useState } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import "./edit.styles.css";
import Axios from "axios";
import appUtilHOC from "../../utils/hoc/app-util.hoc";

const EditPage = ({ match, loader, logger, popup ,history }) => {
  const today = new Date();
  const minDate = `${today.getFullYear()}-${
    today.getMonth() + 1 < 10
      ? "0" + (today.getMonth() + 1)
      : today.getMonth() + 1
  }-${today.getDate() < 10 ? "0" + today.getDate() : today.getDate()}`;

  const [task, updateTask] = useState({
    title: "",
    dueDate: minDate,
    status: false
  });
  useEffect(() => {
    if (match.params.id) {
      loader.showLoader();
      axios
        .get(`http://localhost:3000/tasks/${match.params.id}`)
        .then(response => {
          console.log("Success fetching tasks in form page", response.data);
          loader.hideLoader();
          updateTask(response.data);
          console.log("task new date", task.title);
        })
        .catch(error => {
          console.log("Error fetching task in form page");
          loader.hideLoader();
          popup.showPopup({title: 'Error', message: `Something went wrong fetching details for task: ${match.params.id}. Redirecting to Home`}, () => {
            history.push("/");
        });
        });
    } else {
      history.push("/");
    }
  }, []);
  const handleSaveRequest = event => {
    console.log("updated SAve", task);
    Axios.put(`http://localhost:3000/tasks/${task.id}`, task)
      .then(response => {
        console.log("Success while editing", response);
        history.push("/");
      })
      .catch(error => {
        console.log("Error while editing request", error);
      });
    event.preventDefault();
  };
  const handleTitleChange = event => {
    const newState = { ...task };
    newState.title = event.target.value;
    updateTask(newState);
  };
  const handleDueDateChange = event => {
    const newState = { ...task };
    newState.dueDate = event.target.value;
    updateTask(newState);
    console.log("due change", task.dueDate);
  };
  const handleStatusChange = event => {
    console.log("staus change", event.target.checked);
    const newState = { ...task };
    newState.status = event.target.checked;
    updateTask(newState);
  };
  return (
    <form onSubmit={handleSaveRequest}>
      <div className="edit-page-container">
        <h1>Edit Task</h1>
        <div className="shadow rounded edit-form-section">
          <div className="edit-fields">
            <label className="edit-label">Title:</label>
            <input
              required
              value={task.title}
              onChange={handleTitleChange}
              maxLength="30"
              className="form-control"
              type="text"
            />
          </div>
          <div className="edit-fields">
            <label className="edit-label">Due Date:</label>
            <input
              required
              className="form-control"
              type="date"
              min={minDate}
              value={task.dueDate}
              onChange={handleDueDateChange}
            />
          </div>
          <div className="custom-control custom-switch edit-fields">
            <input
              type="checkbox"
              checked={task.status}
              onChange={handleStatusChange}
              className="custom-control-input"
              id="customSwitches"
            ></input>
            <label className="custom-control-label" htmlFor="customSwitches">
              {task.status ? "Completed" : "Not Completed"}
            </label>
          </div>
          <div className="edit-action-section">
            <button type="submit" className="btn btn-primary">
              {" "}
              Save{" "}
            </button>
            <button type="reset" className="btn btn-primary">
              {" "}
              Reset{" "}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default withRouter(appUtilHOC(EditPage));
