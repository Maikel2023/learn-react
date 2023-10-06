import React from 'react';
import { useHistory } from 'react-router-dom';

function HelloWorld() {
  const history = useHistory();

  const goToTodos = () => {
    history.push('/todos');
  };

  const goToTodoList = () => {
    history.push('/TodoList');
  };

  return (
    <div>
      <h1>Hello, World!</h1>
      <button onClick={goToTodos}>Go to Todos</button>
      <button onClick={goToTodoList}>Go to TodoList</button>
    </div>
  );
}

export default HelloWorld;
