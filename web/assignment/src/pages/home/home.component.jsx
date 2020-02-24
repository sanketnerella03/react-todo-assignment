import React from "react";
import TaskList from "../../components/task-list/task-list.component";
import MyContext from "../../context/MyContext";

class HomePage extends React.Component {
  render() {
    return (
      <MyContext.Consumer>
        {({ tasks, updateTasksList }) => (
          <div>
            <TaskList
              tasks={tasks}
              updateTasksList={updateTasksList}
            ></TaskList>
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}

export default HomePage;
