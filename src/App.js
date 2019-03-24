import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './views/home/Home';
import Landing from './views/landing/Landing';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/home" exact component={Home} />
      </Switch>
    );
  }
}

export default App;
