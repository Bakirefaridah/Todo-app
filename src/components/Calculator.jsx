import React, { useState } from 'react'

const Calculator = () => {
  const[value1, setValue1]=useState('')
   const[value2, setValue2]=useState('')
     const[total, setTotal]=useState('')

     const addition=(input1,input2)=>{
       let a=parseInt(input1)
       let b=parseInt(input2)
           setTotal(a+b)
     }


  return (
    <div style={{
      backgroundColor:'lightblue',
    height:"50vh",
    display:"flex",
    alignItems: 'center',
    justifyContent:"center",
    flexDirection:"column"}}>
      <h1 style={{color:"red"}}>My perfect calculator</h1>
      <input
      type="number"
      name='value1'
      placeholder='value1'
      value={value1}
      onChange={(e)=>setValue1(e.target.value)}
      />
      <input
      type="number"
      name='value2'
      placeholder='value2'
      value={value2}
      onChange={(e)=>setValue2(e.target.value)}
      />
      <button onClick={()=>addition(value1,value2)}>+</button>
      <input
       placeholder="Total"
      name="total"
      value={total}
      
      />
      
    </div>
  )
}

export default Calculator