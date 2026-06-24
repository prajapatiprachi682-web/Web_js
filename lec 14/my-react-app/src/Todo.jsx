// import React, { useEffect, useState } from "react";
// import "./Todo.css";

// const Todo = () => {
//   const [task, setTask] = useState("");

//   let [index,SetIndex]=useState(null)


//   const [todos, setTodos] = useState(()=>{
//     let data=  localStorage.getItem("key")
//     if(data){
//         return JSON.parse(data)
//     }
//     return []
//   });
//   useEffect(()=>{
//     localStorage.setItem("key",JSON.stringify(todos))

//   },[todos])



//   function edit(index){
//     setTask(todos[index])
//     SetIndex(index)

//   }


//   function handleAorUpdate(){
//     if(task.trim()==""){
//         return;
//     }
//     console.log("helloooooo");
    
//     if(index!==null){
//         let updateDATA=[...todos]
//         updateDATA[index]=task
//         setTodos(updateDATA)
//     }else{
//         setTodos([...todos,task])
//         setTask("")
//     }
    

//   }


//   function d(id){
//    let d= todos.filter((a,b)=>{
//         return id!=b

//     })
//     setTodos(d)

//   }

//   return (
//     <div className="container">
//       <h1>Todo List</h1>

//       <div className="input-box">
//         <input
//           type="text"
//           name="task"
//           value={task}
//           placeholder="Enter a task"
//           onChange={(e)=>setTask(e.target.value)}
  
//         />

// <button onClick={handleAorUpdate}>
//     {index!==null?"update":"Add"}
//     </button>
//       </div>
    

//       <div className="todo-list">
//         {todos.map((todo, id) => (
//           <div className="todo-item" key={index}>
//             <span>{todo}</span>

//             <div className="actions">
//               <button onClick={()=>edit(id)}>
//                 Edit
//               </button>

//               <button  onClick={()=>d(index)}>
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default Todo;




// import React, { useReducer, useState } from 'react'

// const Todo = () => {
// //   let [count,SetCount]=  useState(0)
// function reduser(state,action){
//     if(action.type=="inc"){
//         return state+1
//     }
//     return state
// }
//      let [state,disptach]=   useReducer(reduser,0)
//   return (
//     <div>
//         <h2>{state}</h2>
//       <button onClick={()=>disptach({type:"inc"})}>++</button>
//     </div>
//   )
// }

// export default Todo



// import React, { useReducer } from 'react'

// const Todo = () => {
//     function reduser(color,action){
//         if(action.type=="red"){
//             return "red"
//         }
//     }
//  let [color,disptach]=   useReducer(reduser,"snow")
//   return (
//     <div   style={{backgroundColor:color,height:"100vh",width:"100vw"}} >
//         <button onClick={()=>disptach({type:"red"})}>red</button>
//         <button>gold</button>
//         <button>blue</button>
//         <button>green</button>

//     </div>
//   )
// }

// export default Todo



// import React, { useReducer, useState } from 'react'

// const Todo = () => {
// //  let [count,SetCount]=   useState(0)
// function reduser(count,action){
//     if(action.type=="inc"){
//         return count+1
//     }
//     return count
// }
//     let [count,disptach]=     useReducer(reduser, 0)
//   return (
//     <div>
//         <h2>{count}</h2>
//       <button onClick={()=>disptach({type:"inc"})}>++</button>

//     </div>
//   )
// }

// export default Todo






// import React, { useReducer } from 'react'

// const Todo = () => {
//     let intialData={
//         input:"",
//         todos:[]
//     }
//     function reducer(state,action){
//         if(action.type=="set_input"){
//             return{
//                 ...state,input:action.payload
//             }
//         }else if(action.type=="add_TODO"){
//             return{
//                 input:"",
//                 todos:[...state.todos,state.input]
//             }
//         }
//         else if(action.type=="DELET_TODO"){
//             return {
//                 ...state,
//                 todos:state.todos.filter((_,index)=>{
//                     index!==action.payload

//                 })
//             }
//         }

//     }
//   let [state,disptach]= useReducer(reducer,intialData)

//   return (
//     <div>
//         <input onChange={(e)=>disptach({type:"set_input",payload:e.target.value})}/>
//         <button onClick={()=>disptach({type:"add_TODO"})}>add</button>
//         {
//             state.todos.map((a,index)=>{
//                 return(<>
//                 <h2>{a}</h2>
//                 <button onClick={()=>disptach({type:"DELET_TODO",payload:index})}>delet</button>
//                 </>)
//             })
//         }
//     </div>
//   )
// }

// export default Todo


// import React, { useReducer } from 'react'
// const Todo = () => { 
//     let  intialData={
//         input:"",
//         todos:[],
//         index:null
//     }
//     function reduser(state,action){
//         if(action.type=="SET_INP"){
//             return{
//                 ...state,
//                 input:action.payload,
                
//             }
//         }
//         else if(action.type=="ADD_TODO"){
//             return{
//                 todos:[...state.todos,state.input]
//             }
//         }else if(action.type=="DELET_TODO"){
//             return{
//                 ...state,
//                 todos:state.todos.filter((_,id)=>{
//                     return id!==action.payload
//                 })
//             }
//         }else if(action.type=="UPDATE_TODO"){
//             let updateTodos=[...state.todos]
//             updateTodos[state.index]=state.input
//             return{
//                 ...state,
//                 todos:updateTodos,
//                 input:"",
//                 index:null
//             }
//         }else if(action.type=="EDIT_TODO"){
//             return{
//                 ...state,
//                 task:state.todos[action.payload],
//                 index:action.payload
//             }
//         }

//     }
//       let [state,disptach]=   useReducer(reduser,intialData)
//       function handleSubmit(){
//         if(state.index!==null){
//             disptach({type:"UPDATE_TODO"})
//         }else{
//             disptach({type:"ADD_TODO"})
//         }
//       }
//   return (
//     <div>        
//         <input  name='input'  value={state.input}  onChange={(e)=>disptach({type:"SET_INP",payload:e.target.value})}/>
//         <button onClick={handleSubmit}>{state.index!==null?"update":"add"}</button>
//         {  
//             state.todos.map((a,b)=>{
//                 return(<>
//                 <h4>{a}</h4>
//                 <button onClick={()=>disptach({type:"DELET_TODO",payload:b})}>delet</button>
//                 <button onClick={()=>disptach({type:"EDIT_TODO",payload:b})}>edit</button>
//                 </>)
//             })
//         }
//     </div>
//   )
// }

// export default Todo



// import React, { useContext } from 'react'
// import { storeContext } from './Context'

// const Todo = () => {
     
//    let {store,dispatch}=   useContext(storeContext)

   
 
   
//   return (
//     <div>
//       <input onChange={(e)=>dispatch({type:"Set_inp",payload:e.target.value})}/>
//       <button onClick={()=>dispatch({type:"Add_todo"})}>add</button>
//       {
//         store.todos.map((a,id)=>{
//           console.log(a);
          
//           return(<>
//           <h6>{a}</h6>
//           <button onClick={()=>dispatch({type:"delet",payload:id})}>delet</button>
//           </>)
//         })
//       }
//     </div>
//   )
// }

// export default Todo





import React, { useEffect, useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [task, setTask] = useState("");
  const [index, SetIndex] = useState(null);

  const [todos, setTodos] = useState(() => {
    let data = localStorage.getItem("key");

    if (data) {
      return JSON.parse(data);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem("key", JSON.stringify(todos));
  }, [todos]);

  function edit(index) {
    setTask(todos[index]);
    SetIndex(index);
  }

  function handleAorUpdate() {
    if (task.trim() === "") {
      return;
    }

    if (index !== null) {
      let updateDATA = [...todos];
      updateDATA[index] = task;
      setTodos(updateDATA);

      SetIndex(null);
      setTask("");
    } else {
      setTodos([...todos, task]);
      setTask("");
    }
  }

  function d(id) {
    let data = todos.filter((_, i) => {
      return i !== id;
    });

    setTodos(data);
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
          onChange={(e) => setTask(e.target.value)}
        />

        <button onClick={handleAorUpdate}>
          {index !== null ? "Update" : "Add"}
        </button>
      </div>

      <div className="todo-list">
        {todos.map((todo, id) => (
          <div className="todo-item" key={id}>
            <span>{todo}</span>

            <div className="actions">
              <button onClick={() => edit(id)}>
                Edit
              </button>

              <button onClick={() => d(id)}>
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