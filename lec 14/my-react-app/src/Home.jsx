// import React from 'react'

// const Home = () => {
//   return (
//     <div>Home</div>
//   )
// }

// export default Home



import React from 'react'
import A from './A'
const Home = ({a}) => {
  console.log(a);
  return (
    <div>
      <A val={a}/>
    </div>
  )
}

export default Home


// import React from 'react'

// const Home = () => {
//   return (
//     <div>
//       <h1>hello</h1>
//       </div>
//   )
// }

// export default Home