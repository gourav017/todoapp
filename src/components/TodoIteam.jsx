import React from 'react'

import style from "./todo.module.css"

const TodoIteam = ({todo,onDelete}) => {
    const[isCompleted,setIsCompleted] = React.useState(todo.isCompleted)
  return (
    <div className={style.todo} key={todo.id}>
                    <input className={style.input}  type="checkbox" checked={isCompleted} onChange={(e)=>{
                        
                        setIsCompleted(e.target.checked);
                    }
                      
                    }/>
                <div className={isCompleted ? style.striked:""}>{todo.value}</div>
                <button className={style.btn} onClick={()=>onDelete(todo.id)}>Delete</button>
                </div>
  )
}

export default TodoIteam