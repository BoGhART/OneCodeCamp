import React from 'react'
import Child from './Child'

const Parent = () => {
    const greeting = "Hello"
  return (
    <div>
      <h1>{greeting}</h1>
      <Child name="Dion"/>

      
    </div>
  )
}

export default Parent

//Props
