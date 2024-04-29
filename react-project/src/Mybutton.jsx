import React, { useState } from 'react'
import '../src/myStyles.css'

function Mybutton() {
  const [clicked, setClicked] = useState(0)
  function handleClick(){
    setClicked(clicked + 1)
  }
  return (
    <>
      <p>clicked {clicked} times!</p>
      <button className='avatar' onClick={handleClick}>
        Click me
      </button>
    </>
  )
}

export default Mybutton