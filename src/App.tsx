import * as React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { LoginContainer } from "./Pages/login.container";
import { PageB } from "./Pages/pageB";
import "./App.css";

export const App = () => {
  return (
    <>
      <HashRouter>
        <Switch>
          <Route path="/" exact component={LoginContainer} />
          <Route path="/pageB" exact component={PageB} />
        </Switch>
      </HashRouter>
    </>
  );
};

export default App;
