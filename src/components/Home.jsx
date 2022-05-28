import React, { useState } from 'react'



const Home = () => {  
const [name, setName]= useState("")
console.log(name)
  return (
    <div className='home'>  
      <h1>KARONGO PRI SCH</h1>
    <label>Names of the user:</label>
    <input
     type="text" 
     placeholder='Name'
     value={name}
     onChange={(e)=>setName(e.target.value)}
     />
      </div>
  )
}

export default Home