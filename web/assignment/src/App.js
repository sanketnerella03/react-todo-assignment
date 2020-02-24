import React from "react";
import { Switch, Route } from 'react-router-dom';
import logo from "./logo.svg";


import "./App.css";
import HomePage from "./pages/home/home.component";
import RemaindersPage from "./pages/remainders/remainders.component";
import FormPage from "./pages/form/form.component";
import Header from "./components/header/header.component";


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/remainders" component={RemaindersPage} />
        <Route path="/form" component={FormPage} />
      </Switch>
    </div>
  );
}

export default App;
