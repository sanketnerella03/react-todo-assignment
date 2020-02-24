import React from "react";
import "./header.styles.css";
import AppBar from "@material-ui/core/AppBar";
import MyContext from "../../context/MyContext";

const Header = () => {
  return (
    <MyContext.Consumer>
      {({ tasks, updateTasksList }) => (
        <div className="header-app-bar">
          {/* <AppBar position="static" className="header-app-bar"> */}
          <div>
          <span>Home {tasks.length}</span>
          </div>
          <div>
            <span>Reminders</span>
          </div>
          {/* </AppBar> */}
        </div>
      )}
    </MyContext.Consumer>
  );
};

export default Header;
