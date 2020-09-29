import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";
import Home from './components/Home';
import ProductItem from './components/ProductItem';


function RouteConfig() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/product/:id" component={ProductItem} />
        <Route path="*" component={() => <h2>404 Not Found</h2>} />
      </Switch>
    </Router>
  );
}

export default RouteConfig;

