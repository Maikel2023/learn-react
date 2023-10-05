import React from 'react';
import { useHistory } from 'react-router-dom';

function HelloWorld() {
  const history = useHistory();

  const goToTodos = () => {
    history.push('/todos');
  };

  const goToHome = () => {
    history.push('/home');
  };

  return (
    <div>
      <h1>Hello, World!</h1>
      <button onClick={goToTodos}>Go to Todos</button>
      <button onClick={goToHome}>Go to Home</button>
    </div>
  );
}

export default HelloWorld;
