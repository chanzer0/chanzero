import About from "components/about/about";
import React, { ReactElement } from "react";
import "./styles/theme.min.css";
import { Switch, Route, HashRouter } from "react-router-dom";
import Home from "components/home";
import Collection from "components/collection/collection";

const App = (): ReactElement => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/collections/:collectionName" component={Collection} />
      </Switch>
    </HashRouter>
  );
};

export default App;
