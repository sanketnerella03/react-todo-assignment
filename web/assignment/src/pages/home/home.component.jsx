import React, { useContext, useEffect } from "react";
import TaskList from "../../components/task-list/task-list.component";
import AppContext from "../../utils/contexts/AppContext";
import "./home.styles.css";
import axios from "axios";
import LoaderContext from "../../utils/contexts/LoaderContext";
import appUtilHOC from '../../utils/hoc/app-util.hoc';

const HomePage = ({loader, logger, popup}) => {
  const { state, dispatch } = useContext(AppContext);
    const { updateLoader } = useContext(LoaderContext);
  const updateTasksList = () => {
    loader.showLoader();  
    //updateLoader({type: 'UPDATE_LOADER', showLoaderFlag: true });
    axios
      .get("http://localhost:3000/tasks")
      .then(data => {
        logger.info(data);
        //dispa
        dispatch({type: 'UPDATE_TASKS', data: data.data});
        loader.hideLoader();
        popup.showPopup({title: 'Test', message: 'MyMEssage'}, () => {
          console.log("closed popup");
        });
        //updateLoader({type: 'UPDATE_LOADER', showLoaderFlag: false});
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

export default appUtilHOC(HomePage);
