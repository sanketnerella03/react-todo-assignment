import React from 'react';
import MyContext from '../context/MyContext';
import axios from 'axios';

class MyProvider extends React.Component{
    state = {
        tasks: []
    };
    componentDidMount(){
        this.updateTasksList();
    }
    updateTasksList = () => {
        axios.get('http://localhost:3000/tasks').then(
            (data) => {
                console.log("data updated", data);
                this.setState({
                    tasks: data.data
                })
            }
        ).catch(
            (error => {
                console.log("update task list error", error);
            })
        );
    }
    render(){
        return (
            <MyContext.Provider value={{tasks: this.state.tasks, updateTasksList: this.updateTasksList}}>
                {this.props.children}
            </MyContext.Provider>
        );
    }
}

export default MyProvider;