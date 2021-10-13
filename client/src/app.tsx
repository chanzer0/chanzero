import About from "components/about";
import React, { ReactElement } from "react";
import "./styles/theme.min.css";
import { Switch, Route, HashRouter } from "react-router-dom";
import Home from "components/home";

const App = (): ReactElement => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </HashRouter>
  );
};

export default App;
