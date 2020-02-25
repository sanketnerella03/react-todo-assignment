import React, { useReducer } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import logo from "./logo.svg";

import "./App.css";
import HomePage from "./pages/home/home.component";
import RemaindersPage from "./pages/remainders/remainders.component";
import FormPage from "./pages/form/form.component";
import Header from "./components/header/header.component";
import AppContext from './context/AppContext';
import { initialState, reducer } from './reducer/AppReducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" render={() => <Redirect to="home" />} />
          <Route path="/home" component={HomePage} />
          <Route path="/reminders" component={RemaindersPage} />
          <Route path="/task/:id" component={FormPage} />
        </Switch>
      </div>
    </AppContext.Provider>
  );
}

export default App;
