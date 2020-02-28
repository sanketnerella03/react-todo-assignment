import React, { useContext, useEffect } from "react";
import TaskList from "../../components/task-list/task-list.component";
import AppContext from "../../utils/contexts/AppContext";
import "./home.styles.css";
import axios from "axios";
import appUtilHOC from "../../utils/hoc/app-util.hoc";

const HomePage = ({ loader, logger, popup }) => {
  const { state, dispatch } = useContext(AppContext);
  const updateTasksList = () => {
    loader.showLoader();
    axios
      .get("http://localhost:3000/tasks")
      .then(data => {
        logger.info(data);
        dispatch({ type: "UPDATE_TASKS", data: data.data });
        loader.hideLoader();
      })
      .catch(error => {
        console.log("update task list error", error);
        loader.hideLoader();
        popup.showPopup(
          { title: "Error", message: "Something went wrong!" },
          () => {
            console.log("closed popup");
          }
        );
      });
  };

  useEffect(() => {
    updateTasksList();
  }, []);

  return (
    <div>
      <TaskList tasks={state.tasks}></TaskList>
    </div>
  );
};

export default appUtilHOC(HomePage);
