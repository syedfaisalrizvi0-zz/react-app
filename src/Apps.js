import React from "react";
import Header from "./Header";
import "./Work.css";
import Main from "./Main";
import SignIn from './signin'
import { BrowserRouter, Route, Switch } from "react-router-dom";
const Apps = () => {
  return (
    <main>
      <Switch>
      <Route path="/signin" component={SignIn} exact />        
      <Header />
        <Main />
      </Switch>
    </main>
  );
};
export default Apps;
