import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./header.styles.css";
import { faHome, faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from 'styled-components';

const Header = ({history, fontColor}) => {
  const [title, setTitle] = useState("Home");

  const HeaderTitle = styled.span`
    color: ${ ({title}) => {
      if(title === 'Home'){
        return fontColor;
      }
      return 'white';
    } }
  `;

  const MenuIconContainer = styled.div`
    
  background-color: ${ ({selectedMenu}) => {
    if(selectedMenu){
      return 'rgba(0,0,0,0.3)';
    }
    return 'transparent'
  }
  }
  `;
  useEffect(() => {
    console.log("Router change", history.location.pathname);
    if(history.location.pathname.indexOf('edit') !== -1){
      setTitle('Edit');
    }else if(history.location.pathname.indexOf('reminders') !== -1){
      setTitle('Reminders');
    }else{
      setTitle('Home');
    }
  },[history.location.key]);

  const handleHomeClick = () => {
    console.log("calling logger in header");
    // Route further
    history.push("/home");
  };
  const handleReminderClick = () => {
    // Route further
    history.push("/reminders");
  };
  return (
    <div className="header-app-bar">
      <MenuIconContainer selectedMenu={title === 'Home'} className="home-icon">
        <button onClick={handleHomeClick}>
          {" "}
          <FontAwesomeIcon icon={faHome} />{" "}
        </button>
      </MenuIconContainer>
      <div className="current-title">
        <HeaderTitle title={title} >{title}</HeaderTitle>
      </div>
      <MenuIconContainer selectedMenu={title === 'Reminders'} className="reminder-icon">
        <button onClick={handleReminderClick}>
          {" "}
          <FontAwesomeIcon icon={faBell} />{" "}
        </button>
      </MenuIconContainer>
    </div>
  );
};
export default withRouter(Header);
