import React, { useEffect, useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [task, setTask] = useState("");
  let [index,SetIndex]=useState(null)
  const [todos, setTodos] = useState(()=>{
    let data=  localStorage.getItem("key")
    if(data){
        return JSON.parse(data)
    }
    return []
  });
  useEffect(()=>{
    localStorage.setItem("key",JSON.stringify(todos))

  },[todos])



  function edit(index){
    setTask(todos[index])
    SetIndex(index)

  }


  function handleAorUpdate(){
    if(task.trim()==""){
        return;
    }
    console.log("helloooooo");
    
    if(index!==null){
        let updateDATA=[...todos]
        updateDATA[index]=task
        setTodos(updateDATA)
    }else{
        setTodos([...todos,task])
        setTask("")
    }
    

  }


  function d(id){
   let d= todos.filter((a,b)=>{
        return id!=b

    })
    setTodos(d)

  }








  return (
    <div className="container">
      <h1>Todo List</h1>

      <div className="input-box">
        <input
          type="text"
          name="task"
          value={task}
          placeholder="Enter a task"
          onChange={(e)=>setTask(e.target.value)}
  
        />

<button onClick={handleAorUpdate}>
    {index!==null?"update":"Add"}
    </button>
      </div>
    

      <div className="todo-list">
        {todos.map((todo, index) => (
          <div className="todo-item" key={index}>
            <span>{todo}</span>

            <div className="actions">
              <button onClick={()=>edit(index)}>
                Edit
              </button>

              <button  onClick={()=>d(index)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;