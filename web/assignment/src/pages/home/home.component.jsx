import React, { useContext, useEffect } from "react";
import TaskList from "../../components/task-list/task-list.component";
import AppContext from "../../context/AppContext";
import "./home.styles.css";
import axios from "axios";

const HomePage = () => {
  const { state, dispatch } = useContext(AppContext);

  const updateTasksList = () => {
    axios
      .get("http://localhost:3000/tasks")
      .then(data => {
        console.log("data updated", data);
        //dispa
        dispatch({type: 'UPDATE_TASKS', data: data.data});
      })
      .catch(error => {
        console.log("update task list error", error);
      });
  };
  
  useEffect(() => {
    updateTasksList();
  }, []);
  
  return (
    //   <MyContext.Consumer>
    // {({ tasks, updateTasksList }) => (
    <div>
      <TaskList tasks={state.tasks}></TaskList>
    </div>
    // )}
    //   </MyContext.Consumer>
  );
};

export default HomePage;
