//import React, { useState } from "react";

// const Task = () => {
//   const [search, setSearch] = useState("");
//   const [products, setProducts] = useState([]);

//   const handleSearch = async () => {
//     if (search.trim() === "") {
//       alert("Please enter a product name");
//       return;
//     }

//     const res = await fetch(
//       `https://dummyjson.com/products/search?q=${search}`
//     );

//     const data = await res.json();

//     setProducts(data.products);
//   };

//   const lowToHigh = () => {
//     const sortedProducts = [...products].sort(
//       (a, b) => a.price - b.price
//     );

//     setProducts(sortedProducts);
//   };

//   const highToLow = () => {
//     const sortedProducts = [...products].sort(
//       (a, b) => b.price - a.price
//     );

//     setProducts(sortedProducts);
//   };

//   return (
//     <div>
//       <h1>Product Listing</h1>

//       <input
//         type="text"
//         placeholder="Search Product"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       <button onClick={handleSearch}>
//         Search
//       </button>

//       <button onClick={lowToHigh}>
//         Low to High
//       </button>

//       <button onClick={highToLow}>
//         High to Low
//       </button>

//       <div className="products-container">
//         {products.map((item) => (
//           <div className="card" key={item.id}>
//             <img src={item.thumbnail} alt={item.title} />

//             <h3>{item.title}</h3>

//             <p>Price: ${item.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Task;
// import { useEffect,useState } from 'react'
// import React from 'react'

// const Task = () => {
//   return (
//     <div>
//       Task
//     </div>
//   )
// }

// export default Task




import { useEffect, useState } from "react"

const Task = () => {
    let [search,SetSearch]=   useState('')
       let [ApiData,SetApiData]=   useState([])
    // console.log(search,"hehe");
    async function apiCll(){
        if(!search.trim()){
            alert("khaliiiiii")
            return;
        }
        console.log("rcbbbbbbbbbbbb");
        
       let res=  await fetch(`https://dummyjson.com/products/search?q=${search}`)
         let data=    await  res.json()
         console.log(data);
         SetApiData(data.products)
         
        
    }


    useEffect(()=>{
        fetch('https://dummyjson.com/products').then((res)=>{
            return res.json()

        }).then((data)=>{
            console.log(data);
            SetApiData(data.products)
            
        })
    },[])


    function fun1(){
       let sorteddd=   [...ApiData].sort((a,b)=>{
            return a.price-b.price
            
        })

        SetApiData(sorteddd)

    }
    function fun2(){
        let sorteddd=   [...ApiData].sort((a,b)=>{
             return b.price-a.price
             
         })
         SetApiData(sorteddd)
 
     }
    
  return (
    <div>
        <input onChange={(e)=>SetSearch(e.target.value)}/>
        <button onClick={apiCll}>click</button>
        <button onClick={fun1}>low</button>
        <button onClick={fun2}>high</button>

        {
            ApiData.map((a)=>{
                return(<>
                 <h3>{a.price}</h3>
                 <h2>{a.title}</h2>
                <img  src={a.thumbnail}/>
                <button>delet</button>
                </>)
            })
        }
    </div>
  )
}
