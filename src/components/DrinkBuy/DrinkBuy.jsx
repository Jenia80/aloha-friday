import React from "react";
import { useDispatch, useSelector} from "react-redux";
import { deleteItem, setItemInCart } from "../../redux/cart/reducer";
import '../../utills/button.scss';

 export const DrinkBuy = ({ drink }) => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.itemsInCart);
  const isItemInCart = items.some(item => item.idDrink === drink.idDrink);

  const handleClick = (event) => {
    event.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteItem(drink.idDrink))
    } else
    dispatch(setItemInCart(drink));
  }

  return (
    <button 
      className="button"
      onClick={handleClick}
    >
      { isItemInCart ? 'delete': 'choose me'}
    </button>
  )
}