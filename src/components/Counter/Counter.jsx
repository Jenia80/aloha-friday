import React, { useState } from 'react';
import './Counter.scss';

export default function Counter(drink) {
  const ButtonUp = ({ onClickFunction }) => {
    const handleClick = () => {
      onClickFunction(1)
    }
    return <button onClick={handleClick}>+</button>
  }

  const ButtonDown = ({ onClickFunction }) => {
    const handleClick = () => {
      onClickFunction(1)
    }

    return <button onClick={handleClick}>-</button>
  }

  const [count, setCount] = useState(1);
    const incrementCount = () => {
      setCount(count + 1)
    }

    const decrementCount = () => {
      setCount(count - 1)
    }

  return (
 
      <div className='counter'>
        {count>1?<ButtonDown onClickFunction={decrementCount} />:null}
        <span>{count}</span>
        <ButtonUp onClickFunction={incrementCount} />
      </div>
    
  )
}
