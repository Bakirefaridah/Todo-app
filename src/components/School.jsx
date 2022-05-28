import React from 'react'



const School = () => {
const heading=("users!!");
console.log("heading")
  return (
    <div className='school'>
     <h1>Karongo primary sch.</h1>
     <h2>Hello {heading}</h2>
      <p>This school has catigories of users as listed below:</p>
       <ul className='list'>
          <li>Headteacher</li>
          <li>Teachers</li>
          <li>Non-teaching staff</li>
          <li>Cooks</li>
        </ul>
    </div>
  )
}


export default School