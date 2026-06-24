// import { createContext, useReducer } from "react";

// let C=  createContext()
// export default C
// let data={
//     apiData:[],
//     cart:[]
// }

// const Context=({children})=>{
//     function reduser(state,action){
//         console.log(action,"actoionsnsnsnsnsnsns");
//         if(action.type=="add_Data"){
//             return{
//                 ...state,
//                 apiData:action.payload
//             }

//         }
        

//     }
//   let [state,dispatch]=  useReducer(reduser,data)
//     return(
//         <C.Provider value={{state,dispatch}}>
//               {children}
//         </C.Provider>
//     )

// }
// export {Context}