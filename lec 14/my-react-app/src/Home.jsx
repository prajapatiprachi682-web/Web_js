// // // import React from 'react'

// // // const Home = () => {
// // //   return (
// // //     <div>Home</div>
// // //   )
// // // }
// // // const New = () => {
// // //     return (
// // //       <div>newww fileeeee</div>
// // //     )
// // //   }
// // //   export {New}

// // // export default Home

// // import React, { useEffect, useState } from 'react'
// // import './App.css'
// // const Home = ({apiData,SetApiData,cart,SetCart}) => {

// //   console.log(cart,"carttttt");
   
// //   useEffect(()=>{
// //    async function apiCall(){

// //   let res=   await   fetch("https://dummyjson.com/products")
// //        let data=       await res.json()
// //        console.log(data);
// //        SetApiData(data.products)
       

// //     }
// //     apiCall()

// //   },[])

// //   return (
// //     <div id='card'>
// //       {
// //         apiData.map((a)=>{
// //           return(<div id='main_card'>
// //           <img   src={a.thumbnail}/>
// //           <p>{a.title}</p>
// //           <p>{a.price}</p>
// //           <button onClick={()=>SetCart([...cart,a])}>add</button>
// //           </div>)
// //         })
// //       }
// //     </div>
// //   )
// // }

// // export default Home



// // import React, { useContext } from 'react'
// // import Context from './Context'

// // const Home = () => {
// //       let data=   useContext(Context)
// //   return (
// //     <div>{data}</div>
// //   )
// // }

// // export default Home


// import React, { useContext, useEffect, useState } from 'react'
// import './App.css'
// import Context, { storeContext } from './Context';
// const Home = () => {

//     let {store,dispatch}=   useContext(storeContext)
//     // console.log(data,"heheheheheh");
    
//   useEffect(()=>{
//    async function apiCAll(){
//     let res=     await fetch("https://dummyjson.com/products")
//       let data=   await  res.json()
//       // console.log(data);
//       dispatch({type:"Add_apiData",payload:data.products})

     
      

//     }
//     apiCAll()

//   },[])
//   return (
//     <div id='card'>
//       {
//         apiData.map((a,d)=>{
//           return(<div id='main_card'>
//           <img  src={a.thumbnail}/>
//           <p>{a.title}</p>
//           <p>{a.price}</p>

//           </div>)
//         })
//       }
//     </div>
import React, { useEffect } from 'react'
import { useContext } from 'react'
import C from './Context'

const Home = () => {
  let {state,dispatch}=  useContext(C)
  console.log(state,"statetetetetetet");
  

  
    useEffect(()=>{
       async  function call(){
             let res= await fetch("https://dummyjson.com/products")
              let data= await  res.json()
              console.log(data,"'he");
              dispatch({type:"add_Data",payload:data.products})

        }
        call()


    },[])
  return (
    <div>
        {
            state.apiData.map((a)=>{
                console.log(a,"aaa");
                
                return(<>
                      <img  src={a.thumbnail}/>
                </>)

            })
        }
    </div>
  )
}

export default Home