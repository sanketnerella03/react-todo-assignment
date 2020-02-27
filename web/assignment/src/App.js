import React, { useReducer } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import logo from "./logo.svg";

import "./App.css";
import HomePage from "./pages/home/home.component";
import RemindersPage from "./pages/reminders/reminders.component";
import EditPage from "./pages/edit/edit.component";
import Header from "./components/header/header.component";
import AppContext from './utils/contexts/AppContext';
import { initialState, reducer } from './utils/reducers/AppReducer';
import  { initialLoaderState, loaderReducer } from './utils/reducers/LoaderReducer';
import LoaderContext from "./utils/contexts/LoaderContext";
import LoaderComponent from "./components/loader/loader.component";
import { popupReducer, initialPopupState } from "./utils/reducers/PopupReducer";
import PopupContext from "./utils/contexts/PopupContext";
import PopupComponent from "./components/popup/popup.component";

function App() {
  
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loaderFlag, updateLoader] = useReducer(loaderReducer, initialLoaderState);
  const [popupState, updatePopupState] = useReducer(popupReducer, initialPopupState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <LoaderContext.Provider value={{loaderFlag, updateLoader}}>
        <PopupContext.Provider value={{popupState, updatePopupState}}>
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="home" />} />
          <Route path="/home" component={HomePage} />
          <Route path="/reminders" component={RemindersPage} />
          <Route path="/edit/:id" component={EditPage} />
        </Switch>
        <LoaderComponent/>
        <PopupComponent/>
      </div>
        </PopupContext.Provider>
      </LoaderContext.Provider>
    </AppContext.Provider>
  );
}

export default App;
