import React from 'react';
import './App.css';
import { TodoWrapper } from './components/TodoWrapper';
import  Home  from './components/Home';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/todos">
            <TodoWrapper />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
