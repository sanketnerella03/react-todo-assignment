import React from "react";
import axios from "axios";

class FormPage extends React.Component {
state={
    id: "",
    title: "",
    status: false,
    dueDate: ""
}
componentDidMount(){
    const { match: { params } } = this.props;
    if(params.id !== 'new'){
        axios.get(`http://localhost:3000/tasks/${params.id}`).then((response) => {
            console.log("Success fetching tasks in form page", response.data);
            this.setState({...response.data},() => {
                console.log("Updated State", this.state);
            });
        }).catch(error => {
            console.log("Error fetching task in form page");
        });
    }    
}
render() {
    return (
      <div>
        <div className="title-input">
          <span>Title:</span>
          <input type="text" />
        </div>
        <div className="date-input">
          <span>Due Date:</span>
          <input type="text" />
        </div>
        <div className="status-input">
          <span>Status:</span>
          <input type="text" />
        </div>
        <div className="action-items">
          <button> Add </button>
        </div>
      </div>
    );
  }
}

export default FormPage;
