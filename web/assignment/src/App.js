import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import logo from "./logo.svg";

import "./App.css";
import HomePage from "./pages/home/home.component";
import RemaindersPage from "./pages/remainders/remainders.component";
import FormPage from "./pages/form/form.component";
import Header from "./components/header/header.component";
import MyProvider from "./provider/MyProvider";

function App() {
  return (
    <MyProvider>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" render={() => <Redirect to="home" />} />
          <Route path="/home" component={HomePage} />
          <Route path="/reminders" component={RemaindersPage} />
          <Route path="/task/:id" component={FormPage} />
        </Switch>
      </div>
    </MyProvider>
  );
}

export default App;
