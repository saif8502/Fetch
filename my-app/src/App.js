import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Form from "./Form";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <Switch>
          <Route exact path="/form">
            <Form />
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
