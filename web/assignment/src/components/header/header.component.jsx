import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "./header.styles.css";
import MyContext from "../../context/AppContext";
import { faHome, faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({history}) => {
  const [title, setTitle] = useState("Home");

  const handleHomeClick = () => {
    if (title !== "Home") {
      setTitle("Home");
    }
    // Route further
    history.push("/home");
  };
  const handleReminderClick = () => {
    if (title !== "Reminders") {
      setTitle("Reminders");
    }
    // Route further
    history.push("/reminders");
  };
  return (
    <div className="header-app-bar">
      {/* <AppBar position="static" className="header-app-bar"> */}
      <div className="home-icon">
        <button onClick={handleHomeClick}>
          {" "}
          <FontAwesomeIcon icon={faHome} />{" "}
        </button>
      </div>
      <div className="current-title">
        <span>{title}</span>
      </div>
      <div className="reminder-icon">
        <button onClick={handleReminderClick}>
          {" "}
          <FontAwesomeIcon icon={faBell} />{" "}
        </button>
      </div>
      {/* </AppBar> */}
    </div>
  );
};
export default withRouter(Header);
