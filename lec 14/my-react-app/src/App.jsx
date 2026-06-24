// import { useState } from "react"

import { memo, useMemo, useState } from "react"
import useCounter from "./useCounter" 

// import { useMemo } from "react";
// import useCounter from "./useCounter"


// import { useState } from "react"
// import Home from "./Home"

// const App = () => {
//        let [count,SetCount]=    useState(0)
//   function fun1(){
//     SetCount(count+1)

//   }
//   return (
//     <div>
//       <h3>{count}</h3>
//        <button onClick={fun1}>click</button>
//     </div>
//   )
// }

// export default App



// import React, { useState } from 'react'
// const App = () => {
//        let [color,SetColor]=     useState("red")
//        function fun1(){
//         SetColor("green")
//        }
//   return (
//     <div style={{backgroundColor:color,height:"100vh"}}>
//       <button  onClick={fun1}>red</button>
//     </div>
//   )
// }

// export default App
// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <Home/>
//     </div>
//   )
// }
// const Home = () => {
//   return (
//     <div>Helllooo</div>
//   )
// }

// export default App


// import React from 'react'
// import Home from './Home'

// const App = () => {
//   return (
//     <div>
//     <Home/>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import Home from './Home'
// import {New}  from './Home'
// const App = () => {
//   return (
//     <div>
//     <Home/>
//     <New/>
//     </div>
//   )
// }

// export default App



// import React from 'react'
// import Home from './Home'

//  // App->Home->A->B->C

// const App = () => {
//   let user="ankittt"
//   return (
//     <div><Home  data={user}/></div>
//   )
// }

// export default App



// const App = () => {
//   // let count=0
//       let [count,SetCount]=    useState(0)
//       function fun1(){
//         SetCount(count+1)
//         // count++
//       }

//   return (
//     <div>
//       <h4>{count}</h4>
//       <button onClick={fun1}>click</button>
//       <Home/>
//     </div>
//   )
// }

// export default App



// import React from 'react'
// import New from "./New"
// import {About} from './New'

// const App = () => {
//   return (
//     <div>
//       <New/>
//       <About/>
//     </div>
//   )
// }

// export default App



// import React from 'react'
// import Home from './Home'
// const App = () => {
//   let data="hello"
//   return (
//     <div>
//       <Home a={data}/>
//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'
// import Home from './Home'

// const App = () => {
//   // let count=0
//   let [count,SetCount]=   useState(0)
  
//   function fun1(){
//     SetCount(count+1)
  
//   }
//   function fun2(){
//     SetCount(count-1)
  
//   }
//   function fun3(){
//     SetCount(0)
  
//   }
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={fun1}>++</button>
//       <button onClick={fun2}>--</button>
//       <button onClick={fun3}>reset</button>


   
//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'
// const App = () => {
//             let [input,SetInput]=     useState("")
//             let [data,SetData]=     useState('')
//   function fun1(e){
//     // console.log(e.target.value);
//     SetInput(e.target.value) 
//   }
//   function done(){
//     SetData(input)

//   }
//   return (
//     <div>
//       <h2>{data}</h2>
//       <input type='text' name='input'  placeholder='Enter your name' onChange={fun1}/>
//       <button onClick={done}>click</button>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import Form from './Form'

// const App = () => {
//   return (
//     <div>
//       <Form/>
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {
//             let [input,SetInput]=      useState("")
//             let [data,SetData]=      useState("")
//   function fun1(e){
//     // console.log(e.target.type);
//     SetInput(e.target.value) 
//   }
//   function done(){
//     SetData(input)
//     SetInput("")

//   }
//   return (
//     <div>
//       <h2>{data}</h2>
//       <input   type='text'  name='input'  value={input}  onChange={fun1}/>
//       <button onClick={done}>click</button>
//       {/* <input type='email'/> */}
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Form from './Form'

// const App = () => {
//   return (
//     <div>
//       <Form/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Form from './Form'

// const App = () => {
//   return (
//     <div>
//       <Form/>
//     </div>
//   )
// }

// export default App





// import './App.css'
// const App = () => {
//       let [ApiData,SetApiData]=    useState([])
//       useEffect(()=>{
//               //  console.log("hello"); 
//               async  function call(){
//                 let res=  await  fetch("https://dummyjson.com/products")
//                 let data=        await   res.json()
//                 console.log(data.products);
//                 SetApiData(data.products)
//               }
//               call()
//       },[])
      
//   return (
//     <div id="parent_div"   className="">
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Task from "./Task"

// const App = () => {
//   return (
//     <div>
//       <Task/>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import NavBar from "./NavBar"
// import { Route, Routes } from "react-router-dom"
// import Home from "./Home"
// import About from "./About"
// import Task from "./Task"
// const App = () => {
//   return (
//     <div>
//       <NavBar/>
//       <Routes>
//         <Route    path="/"   element={<Home/>}/>
//         <Route    path="/about"   element={<About/>}/>
//         <Route    path="/task"   element={<Task/>}/>
//       </Routes>
//     </div>
//   )
// }

// export default App

// http://localhost:5173/



// google.com/insta/userID



// import React from 'react'
// import NavBar from "./NavBar"
// import { Route, Routes } from "react-router-dom"
// import Home from "./Home"
// import About from "./About"
// import Task from "./Task"
// const App = () => {
//   return (
//     <div>
//       <NavBar/>
//       <Routes>
//          <Route  path="/"  element={<Home/>}/>
//          <Route  path="/about"  element={<About/>}/>
//          <Route  path="/task"  element={<Task/>}/>


//       </Routes>
//     </div>
//   )
// }

// export default App

// // google.com/whatApp/userID
// // localhost:5173/about


// import React from 'react'
// import Todo from "./Todo"

// const App = () => {
//   return (
//     <div><Todo/></div>
//   )
// }

// export default App




//main-> app-> A-> b-> C



// import NavBar from "./NavBar"

// import { Route, Routes } from "react-router-dom"
// import Cart from "./Cart"

//  //main -> App-> Home-> A 





// const App = () => {
// //   let [apiData,SetApiData] =   useState([])
// //  let [cart,SetCart]= useState([])
//   return (

//     <div>
//       <NavBar/>
//       <Routes>
//         <Route path="/" element={<Home apiData={apiData}  SetApiData={SetApiData} cart={cart}  SetCart={SetCart}/>}/>
//         <Route path="/cart" element={<Cart cart={cart}/>}/>

//       </Routes>
// //     </div>
// //   )
// // }

// // export default App





// // const App = () => {
  
// //   return (
// //     <div>
// //       <NavBar/>
// //       <Routes>
// //         <Route  path="/"  element={<Home />}/>
// //         <Route  path="/cart"  element={<Cart/>}/>

// //       </Routes>
// //     </div>
// //   )
// // }

// // export default App



// // import React, { useReducer } from 'react'

// // const App = () => {
// //   let data={
// //     input:"",
// //     todos:[]
// //   }
// //   function reduser(state,action){
// //     if(action.type==="SET_TODO"){
// //       return{
// //         ...state,
// //         input:action.payload
// //       }
// //     }
// //     else if(action.type==="Add_todo"){
// //       return{
// //         ...state,
// //         todos:[...state.todos,state.input]
// //       }
// //     }

// //   }
// //    let [state,dispatch]=   useReducer(reduser,data)
// //   return (
// //     <div>
// //       <input onChange={(e)=>dispatch({type:"SET_TODO",payload:e.target.value})}/>
// //       <button onClick={()=>dispatch({type:"Add_todo"})}>add</button>
// //     </div>
// //   )
// // }

// // export default App

// import { createContext, useContext, useState } from "react";

// /*
//   ========================================================
//   useContext DEMO — Theme Switcher
//   --------------------------------------------------------
//   Idea: App (parent) ek theme banata hai. Wo theme
//   seedhe sabse niche wale child (ThemedButton) tak
//   pahunchta hai — beech wale Toolbar ko props dene ki
//   zaroorat NAHI. Isi ko "prop drilling se bachna" kehte hain.

//   Component tree:
//       App  (Provider — yahan se data bhejte hain)
//         └── Toolbar   (beech ka child — ise theme se matlab nahi)
//               └── ThemedButton  (yahan theme use hoti hai)
//   ========================================================
// */

// // STEP 1: Context banao. Yeh ek "box" hai jisme data rakhenge.
// const ThemeContext = createContext(null);

// // STEP 2: Sabse niche wala child — yahan useContext se data nikalte hain.
// //          Dhyaan do: ise koi prop nahi mil rahi, fir bhi theme mil gayi!
// function ThemedButton() {
//   const { theme, toggleTheme } = useContext(ThemeContext);

//   const isDark = theme === "dark";

//   return (
//     <button
//       onClick={toggleTheme}
//       style={{
//         background: isDark ? "#1f2937" : "#fde68a",
//         color: isDark ? "#fde68a" : "#1f2937",
//         border: "2px solid",
//         borderColor: isDark ? "#fde68a" : "#1f2937",
//         padding: "12px 22px",
//         borderRadius: 999,
//         fontSize: 16,
//         fontWeight: 700,
//         cursor: "pointer",
//         transition: "all 0.25s ease",
//       }}
//     >
//       {isDark ? "🌙 Dark mode" : "☀️ Light mode"} — switch karo
//     </button>
//   );
// }

// // STEP 3: Beech ka child. Ye theme ke baare mein kuch nahi janta,
// //          bas ThemedButton ko render karta hai. (No props passing!)
// function Toolbar() {
//   return (
//     <div style={{ display: "flex", justifyContent: "center" }}>
//       <ThemedButton />
//     </div>
//   );
// }

// // Chhota sa tree diagram taaki samajh aaye data kaise neeche jaata hai
// function TreeDiagram({ theme }) {
//   const isDark = theme === "dark";
//   const dim = isDark ? "#9ca3af" : "#6b7280";
//   const hot = isDark ? "#fde68a" : "#b45309";
//   return (
//     <pre
//       style={{
//         fontFamily: "ui-monospace, monospace",
//         fontSize: 13,
//         lineHeight: 1.7,
//         color: dim,
//         margin: 0,
//       }}
//     >
//       <span style={{ color: hot, fontWeight: 700 }}>App</span>  ← Provider (theme: "{theme}")
//       {"\n"}  └─ Toolbar       <span style={{ fontStyle: "italic" }}>(theme se matlab nahi)</span>
//       {"\n"}       └─ <span style={{ color: hot, fontWeight: 700 }}>ThemedButton</span>  ← useContext() se theme yahan mili
//     </pre>
//   );
// }

// // STEP 4: App — yahan state banti hai aur Provider se sabko di jaati hai.
// export default function App() {
//   const [theme, setTheme] = useState("light");

//   const toggleTheme = () =>
//     setTheme((t) => (t === "light" ? "dark" : "light"));

//   const isDark = theme === "dark";

//   return (
//     // value={...} mein jo bhi doge, woh har child ko mil jaayega
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       <div
//         style={{
//           minHeight: "100vh",
//           background: isDark ? "#0f172a" : "#fffbeb",
//           color: isDark ? "#e5e7eb" : "#1f2937",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           padding: 20,
//           transition: "background 0.25s ease",
//         }}
//       >
//         <div
//           style={{
//             maxWidth: 520,
//             width: "100%",
//             background: isDark ? "#1e293b" : "#ffffff",
//             borderRadius: 18,
//             padding: "32px 28px",
//             boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
//           }}
//         >
//           <h1 style={{ fontSize: 24, fontWeight: 800, margin: "0 0 6px" }}>
//             useContext Demo
//           </h1>
//           <p style={{ margin: "0 0 22px", color: isDark ? "#94a3b8" : "#6b7280" }}>
//             Niche button dabao — theme poori app me badal jaayegi, bina props
//             pass kiye.
//           </p>

//           <div
//             style={{
//               background: isDark ? "#0f172a" : "#f9fafb",
//               borderRadius: 12,
//               padding: 16,
//               marginBottom: 24,
//             }}
//           >
//             <TreeDiagram theme={theme} />
//           </div>

//           <Toolbar />
//         </div>
//       </div>
//     </ThemeContext.Provider>
//   );
// }


// const App = () => {
//          let {count,inc,dec,reset}  =    useCounter(0)
//          console.log("he;");           
//        let total=  useMemo(()=>{
//           let res=0
//           for(let i=0;i<1000000000;i++){
//             res+=i
//           }
//           return res
//          },[])
//   return (
//     <div>
//       <h3>{count}</h3>
//        <h2>{total}</h2>
//       <button onClick={inc}>++</button>
//       <button onClick={dec}>--</button>
//       <button onClick={reset}>reset</button>

//     </div>
//   )
// }

// export default App

// import React, { memo, useState } from 'react'

// const App = () => {
//     let [count,SetCount]=   useState(0)
//   return (
//     <div>
//       <h3>{count}</h3>
//       <button onClick={()=>SetCount(count+1)}>add</button>
//       <M/></div>
//   )
// }
// const  M=memo(function(){
//   console.log("hello");
  
//   return(<></>)
// })

// export default App

// const App = () => {
//       let {count,inc,dec,reset}=    useCounter(0)

//     let total=  useMemo(()=>{
//         let res=0
//         for(let i=0;i<1000000000;i++){
//           res+=i
//         }
//         return res


//       },[])

  
//   return (
//     <div>
//       <h4>{count}</h4>
//       <h3>{total}</h3>
//        <button onClick={inc}>++</button>
//        <button onClick={dec}>--</button>
//        <button onClick={reset}>reset</button>
//     </div>
//   )
// }

// export default App




// const App = () => {
//  let [count,SetCount]= useState(0)
//   return (
//     <div>
//       <h2>{count}</h2>
//       <button onClick={()=>SetCount(count+1)}>add</button>
//       <Child/></div>
//   )
// }

// let Child=memo(function(){
//   console.log("hello");
  
//   return(<>
//   </>)

// })

// export default App

// import React from 'react'
// import NavBar from "./NavBar"
// import { Route, Routes } from "react-router-dom"
// import Home from "./Home"
// import Cart from "./Cart"
// // http://localhost:5173/
// const App = () => {
//   return (
//     <div>
//       <NavBar/>
//       <Routes>
//         <Route  path="/" element={<Home/>}/>
//         <Route  path="/cart" element={<Cart/>}/>
   
//       </Routes>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import Home from "./Home"

// const App = () => {
//   return (
//     <div>
//       <Home/>
//     </div>
//   )
// }

// export default App



import Todo from "./Todo";

function App() {
  return <Todo />;
}

export default App;