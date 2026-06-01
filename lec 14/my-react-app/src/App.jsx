// import {useState} from 'react'
// //import Home from './Home'
// const App=()=>{
// let [count,setCount]=useState(0)
// function fun1() {
//   setCount(count+1)
// }
// function fun2() {
//   setCount(count-1)
// }
// function fun3() {
//   setCount(0)
// }
//   return (
//     <div>
//       <h3>{count}</h3>
//       <button onClick={fun1}>++</button>
//       <button onClick={fun2}>--</button>
//        <button onClick={fun3}>reset</button>
      
//     </div>
//   )
// }
// export default App


// import React, {useState} from 'react'
// const App=()=>{
//   let[color,setColor]=useState("red")
//   function fun1(){
//     setColor("green")
//   }
//   return (
//     <div style={{backgroundColor:color,height:"100vh"}}>
//       <button onClick={fun1}>red</button>
//     </div>
//   )
// }
// export default App


// import React from 'react'
// import Home from './Home'
// const App=()=>{

//   return (
//     <div><Home/></div>
//   )
// }
// // const Home=()=>{
// //   return (
// //     <div>helloo</div>
// //   )
// // }
// // export {Home}
// export default App




// import React from 'react'
// import Home from './Home'
// const App = () => {
//   let data ="hello"
//   return (
//     <div>
//       <Home a={data}/>
//     </div>
//   )
// }

// export default App



import "./App.css";
import Task from "./Task";

function App() {
  return (
    <div>
      <Task />
    </div>
  );
}

export default App;