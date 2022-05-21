import React from 'react'

import style from "./todo.module.css"
import TodoIteam from './TodoIteam';

const Todo = () => {

    let [value,setValue]= React.useState("");
    const [todos,setTodos] =React.useState([]);

    const onDelete=(id)=>{
       let newTodos = todos.filter(todo=>todo.id !==id );
       setTodos(newTodos);
    }

   
  return (
    <div>
        <h1>Todo App</h1>

        <input className={style.input} value={value} onChange={(e)=>setValue(e.target.value)} />
        <button className={style.btn} onClick={()=>{
            setTodos([...todos,{id:Date.now(),value:value},]);
            setValue("");

        }}>+</button>

      <h1 className={style.list}>
            {todos.map((todo)=>(
              
                <TodoIteam key={todo.id} todo={todo} onDelete={onDelete}/>
            ))}
        </h1>
    </div>
  );
}

export default Todo