import React from 'react'

const Time = () => {
  const date = new Date();
  const hours= date.getHours()
  let timeOfDay

  if(hours < 12) {
    timeOfDay="Morning"
  }
  else if (hours >= 12 && hours <= 17) {
    timeOfDay='afternoon'
  } else{
    timeOfDay='night'

    }


  return (
    <div>
        <h1 style={{color:'blue',backgroundColor:'grey'}}>Good{timeOfDay}!</h1>
    </div>
  )
}

export default Time