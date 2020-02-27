import React, { useReducer } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import logo from "./logo.svg";

import "./App.css";
import HomePage from "./pages/home/home.component";
import RemindersPage from "./pages/reminders/reminders.component";
import EditPage from "./pages/edit/edit.component";
import Header from "./components/header/header.component";
import AppContext from './context/AppContext';
import { initialState, reducer } from './reducer/AppReducer';
import  { initialLoaderState, loaderReducer } from './reducer/LoaderReducer';
import LoaderContext from "./context/LoaderContext";
import LoaderComponent from "./components/loader/loader.component";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loaderFlag, updateLoader] = useReducer(loaderReducer, initialLoaderState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <LoaderContext.Provider value={{loaderFlag, updateLoader}}>

      <div>
        <Header testProp='test' />
        <Switch>
          <Route exact path="/" render={() => <Redirect to="home" />} />
          <Route path="/home" component={HomePage} />
          <Route path="/reminders" component={RemindersPage} />
          <Route path="/edit/:id" component={EditPage} />
        </Switch>
        <LoaderComponent/>
      </div>
      
      </LoaderContext.Provider>
    </AppContext.Provider>
  );
}

export default App;
