//Todolist

//We importeren React, useEffect, useState en Axios.
//We definiëren een functionele component genaamd TodoList.
//We gebruiken useState om een staat todos te beheren voor onze taken.
//Met useEffect halen we gegevens op van een externe API (JSONPlaceholder) en slaan deze op in todos zodra de component wordt geladen.
//In de weergave worden de opgehaalde taken weergegeven in een lijst.


import React, { useEffect, useState } from 'react';
import axios from 'axios'; 

function TodoList() {
    const [todos, setTodos] = useState([]);
  
    useEffect(() => {
      
      async function fetchTodos() {
        try {
          
          const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
          const data = await response.data;
  
  
          setTodos(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
  

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