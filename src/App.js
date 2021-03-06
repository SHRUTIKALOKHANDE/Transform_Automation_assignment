import { Route, Switch, useLocation, Redirect } from "react-router-dom";
import React, { useLayoutEffect } from "react";
import Home from "./components/Home";
import Card_Details from "./components/Card_Details";

export default function App(props) {
  const location = useLocation();
  // Scroll to top if path changes
  useLayoutEffect(() => {
    window && window.scrollTo(0, 0);
  }, [location.pathname, location.state]);
  return (
      <div className="App">
        <Switch>
          <Route exact path={`/resources/:id`} render={(props) => (
            <Card_Details id={props.match.params.id} { ...location.state } />
          )} />
           
           <Route path = '/resources'>
            <Home />
          </Route>
          
          <Route path="/" render={() => (
            <Redirect to="/resources" />
          )} />

          
        </Switch>
      </div>
  );
}
