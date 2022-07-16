import React from 'react';
import './Drinks.scss';
import { DrinkBuy } from '../DrinkBuy/DrinkBuy';

export  const DrinkCard = ({drinks, loading}) => {
  if (loading) {
    <h2>loading...</h2>
  }
  return (
    <div className='drinks'>
      {drinks.map(drink => (
        <div className="drinks__drink-card" key={drink.idDrink}>
          <div className="drinks__drink-card--pic">
            <img
              src={drink.strDrinkThumb}
              alt="pic"
              className="drinks__drink-card--img"
            />
          </div>

          <div className="drinks__drinkc-card--name">
            {drink.strDrink}
          </div>

          <DrinkBuy drink={drink}/>
        </div>
      ))}
    </div>
  )
}

