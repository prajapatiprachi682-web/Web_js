import React, { createContext, useReducer } from "react";
export const storeContext = createContext();
const initialState = {
      input:"",
      todos:[]
};
function reducer(store, action) {
    console.log(action,"acc");
    
    if(action.type=="Set_inp"){
        return{
            ...store,
            input:action.payload
        }
    }else if(action.type=="Add_todo"){
        return{
            ...store,
            todos:[...store.todos,store.input]
        }
    }else if(action.type=="delet"){
        return{
            ...store,
            todos:store.todos.filter((a,b)=>{
                return b!=action.payload

            })
        }
    }
}
const Context = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, initialState);

  return (
    <storeContext.Provider value={{ store, dispatch }}>
      {children}
    </storeContext.Provider>
  );
};

export default Context;