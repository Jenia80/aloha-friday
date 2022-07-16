import React from 'react';
import { useSelector } from 'react-redux';
import { CartItem } from '../../components/CartItem/CartItem';
import './Cart.scss';

export const Cart = () => {
  const items = useSelector(state => state.cart.itemsInCart);

  if (items.length < 1) {
    return <h1>cart is empty</h1>
  }

  return (
    <div className='cart'>
      {items.map(drink => <CartItem drink={drink} key={drink.idDrink}/>)}
    </div>
  );
};
