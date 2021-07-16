import * as React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { PageA } from "./Pages/pageA";
import { PageB } from "./Pages/pageB";
import "./App.css";

export const App = () => {
  return (
    <>
      <HashRouter>
        <Switch>
          <Route path="/" exact component={PageA} />
          <Route path="/pageB" exact component={PageB} />
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
