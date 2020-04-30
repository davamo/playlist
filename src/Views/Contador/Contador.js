/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useEffect, useState } from 'react'

const  Contador = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Has hecho clic ${count} veces`
  })

  return (
    <div>
      <span>El contador está a {count}</span> 
      <p>
      <button onClick={() => setCount(count + 1)}>
      &#x2795;
      </button>
      <b></b>
      <button onClick={() => setCount(count - 1)}>
      &#x2796;
      </button>
      </p>
    </div>
  )
}

export default Contador;