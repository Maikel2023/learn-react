//TodoForm.js:

//Deze component maakt een formulier om nieuwe taken toe te voegen.
//Het ontvangt een functie addTodo.
//Wanneer het formulier wordt ingediend, wordt addTodo aangeroepen om een nieuwe taak toe te voegen.


import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value) {

          addTodo(value);

          setValue('');
        }
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Wat moet je doen vandaag?' />
    <button type="submit" className='todo-btn'>Toevoegen</button>
  </form>
  )
}