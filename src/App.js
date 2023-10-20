import React from 'react';
import './App.css';
import { TodoWrapper } from './components/TodoWrapper';
import Helloworld from './pages/HelloWorld';
import TodoList from './components/TodoList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Helloworld /> {/* Render the Hello World component */}
        </Route>
        <Route exact path="/TodoList">
          <TodoList />
        </Route>
        <Route path="/todos">
          <TodoWrapper />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
