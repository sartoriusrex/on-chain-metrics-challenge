import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Home from './pages/Home';
import Difficulty from './pages/Difficulty';
import HashRate from './pages/HashRate';

import './App.css';

function App() {
  return (
    <Router>
      <div>

        <nav>
          <ul>
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/difficulty">
                Difficulty
              </Link>
            </li>
            <li>
              <Link to="hash-rate">
                Hash Rate
              </Link>
            </li>
          </ul>
        </nav>

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
