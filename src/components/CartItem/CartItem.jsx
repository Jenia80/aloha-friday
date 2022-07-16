import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../../redux/cart/reducer';
import './CartItem.scss';

export const CartItem = ({ drink }) => {
  const item = drink.strDrink;
  const img = drink.strDrinkThumb;
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  
  const handleClick = () => {
    dispatch(deleteItem(drink.idDrink));
  }

  const decrementCount = () => {
    setCount(count - 1)
  }

  const incrementCount = () => {
    setCount(count + 1)
  }

  return (
    <div className='cart-item' key={drink.idDrink}>
      <div className='cart-item__product'>
        <div
          className="cart-item__product--img"
          style={{ backgroundImage: `url(${img})` }}
        />
        <span className="cart-item__product--name">{item}</span>
      </div>

      <div className='cart-item__product--counter'>
        {
          count > 1? 
            <button 
              className='cart-item__product--counter__button' 
              onClick={decrementCount}
              >
                -
              </button>
        :
          <button className='cart-item__product--counter__button'
          onClick={handleClick}>-</button>
        }  
        <span>{count}</span>
        <button 
          className='cart-item__product--counter__button'
          onClick={incrementCount}
        >
          +
        </button>
      </div>
    </div>
  )
}
