import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartMenu from '../CartMenu/CartMenu';
import { ItemsInCart } from "../itemsInCart/itemsInCart";
import './Shop.scss';

export const Shop = () => {
  const items = useSelector(state => state.cart.itemsInCart);
  const navigate = useNavigate()
  const [isCartMenuVisible,  setIsCartMenuVisible] = useState(false)
  
  const handleGotToOrder = useCallback(() => {
    setIsCartMenuVisible(false);
    navigate('cart')
  }, [navigate])
  return (
    <div 
      className="shop" 
      onDoubleClick={() => setIsCartMenuVisible(!isCartMenuVisible)} 
      onClick={handleGotToOrder}
    >
      <ItemsInCart quantity={items.length} />
      <div className="shop__logo" />
      {isCartMenuVisible && <CartMenu items={ items } onClick={ handleGotToOrder } />}
    </div>
    
  )
}