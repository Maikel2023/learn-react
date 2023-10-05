import React from 'react';
import './App.css';
import { TodoWrapper } from './components/TodoWrapper';
import Home from './pages/Home';
import Helloworld from './pages/HelloWorld';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Helloworld /> {/* Render the Hello World component */}
        </Route>
        <Route exact path="/home">
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
