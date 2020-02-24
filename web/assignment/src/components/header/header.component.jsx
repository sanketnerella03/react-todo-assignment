import React from "react";
import { withRouter } from 'react-router-dom';
import "./header.styles.css";
import AppBar from "@material-ui/core/AppBar";
import MyContext from "../../context/MyContext";
import { faHome, faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Header extends React.Component{

  state = {
    title: "Home"
  }
  handleHomeClick = () => {
    if(this.state.title !== 'Home'){
      this.setState({
        title: 'Home'
      });
      
    }
    // Route further
    this.props.history.push('/home');
  }
  handleReminderClick = () => {
    if(this.state.title !== 'Reminders'){
      this.setState({
        title: 'Reminders'
      });
    }
    this.props.history.push('/reminders');
  }
  render(){
  return (
    <MyContext.Consumer>
      {({ tasks, updateTasksList }) => (
        <div className="header-app-bar">
          {/* <AppBar position="static" className="header-app-bar"> */}
          <div className="home-icon">
            <button onClick={this.handleHomeClick}> <FontAwesomeIcon icon={faHome} /> </button>
          </div>
          <div className="current-title">
            <span>{this.state.title}</span>
          </div>
          <div className="reminder-icon">
          <button onClick={this.handleReminderClick}> <FontAwesomeIcon icon={faBell} /> </button>
          </div>
          {/* </AppBar> */}
        </div>
      )}
    </MyContext.Consumer>
  )
  }
};
export default withRouter(Header);
