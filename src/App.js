import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import AppNav from './features/AppNav';
import Home from './pages/Home';
import Difficulty from './pages/Difficulty';
import HashRate from './pages/HashRate';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>

        <AppNav />

        <Switch>
          <Route path="/difficulty">
            <Difficulty />
          </Route>
          <Route path="/hash-rate">
            <HashRate />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
