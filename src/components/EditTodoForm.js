//EditTodoForm.js:

//Deze component maakt een bewerkingsformulier voor taken.
//Het ontvangt twee dingen: een functie editTodo en een taakobject task.
//Wanneer je het formulier indient, wordt de editTodo-functie aangeroepen om de taak bij te werken.


import React, {useState} from 'react' 
//state wordt gebruikt om gegevens op te slaan die in de loop van de tijd kunnen veranderen, waardoor je componenten dynamisch wordt

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);
                        //e = event
    const handleSubmit = (e) => {
      
        e.preventDefault();
        
        editTodo(value, task.id);
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Update task' />
    <button type="submit" className='todo-btn'>Toevoegen</button>
  </form>
  )
}