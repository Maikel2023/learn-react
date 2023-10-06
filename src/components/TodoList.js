import React, { useEffect, useState } from 'react';
import axios from 'axios'; // If you are using Axios

function TodoList() {
    const [todos, setTodos] = useState([]);
  
    useEffect(() => {
      // Define a function to fetch data from the API
      async function fetchTodos() {
        try {
          // Use fetch or Axios to make the API call
          const response = await axios.get('https://jsonplaceholder.typicode.com/todos'); // If using Axios
          // const response = await fetch('https://jsonplaceholder.typicode.com/todos'); // If using fetch
          const data = await response.data;
  
          // Update the state with the fetched data
          setTodos(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
  
      // Call the fetchTodos function when the component mounts
      fetchTodos();
    }, []);
  
    return (
      <div>
        <h1>Todo List</h1>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default TodoList;