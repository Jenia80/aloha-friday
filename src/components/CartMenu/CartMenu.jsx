import React from 'react';
import './CartMenu.scss';
import '../../utills/button.scss';

export default function CartMenu({ items, onClick }) {
  return (
    <div className='cart-menu'>
      {
        items.length > 0 ?
        <>
          <ul className="cart-menu__list">
            {items.map((drink) => 
              <li key={drink.idDrink} className="cart-menu__list--el">
                {drink.strDrink}
              </li> 
            )}
          </ul>
          
          <button 
            className="button button__cart"
            onClick={ onClick }
          >
            order
          </button>
        </>
        :null
      }
    </div>
  )
}
