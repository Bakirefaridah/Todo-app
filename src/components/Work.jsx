  import React, { useState } from 'react'


function Todo({todo,index,completeTodo,removeTodo}){
  
  return <div style={{textDecoration: todo.isCompleted ? "line-through" : ""}}
   className='todo'>
   {todo.text}
   <div>
     <button onClick={()=>completeTodo(index)}>complete</button>
     <button onClick={()=>removeTodo(index)}>x</button>

   </div>
   </div>
}
const TodoForm = ({addTodo})=>{
  const[value,setValue]=useState("");
  
const handleSubmit=e =>{
  e.preventDefault();
  if(!value)return
  addTodo (value);
  setValue("");
}
  return(
    <form onSubmit={handleSubmit}> 
    <input type='text'
    className="input"
    placeholder='AddTodo--- '
    value={value}
    onChange={e=>setValue(e.target.value)}/>
    </form>
  )
}

const Work = () => {
  const[todos,setTodos] =useState([
    {
      text:'Learn about React',
      isComplete:false
    },
    {
      text:'Meet friends for lunch',
      isComplete:false
    },
    {
      text:'Biuld really cool todo app',
      isComplete:false
    },

  ]);
  const addTodo=text=>{
    const newTodos=[...todos,{text}];
    setTodos(newTodos);
  };
  const completeTodo=index=>{ 
     const newTodos=[...todos];
    newTodos[index].isComplete=true
    setTodos(newTodos);
  };
  const removeTodo=index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }; 


  return (
    <div className='work'>
    
      <div className='todo-list'>
        {todos.map((todo,index)=>(
          <Todo key={index} index={index} todo={todo} completeTodo={completeTodo}
          removeTodo={removeTodo}/>
        ))}
        <TodoForm addTodo={addTodo}/>
        
      </div>
      

    </div>
  )
}

export default Work