import React, { useState, useEffect } from "react";
import axios from "axios";
import './Home.scss';
import { DrinkCard } from "../../components/Drinks/Drinks";
import Pagination from "../../components/Pagination/Pagination";

const Home = () => {
  const [data, setData] = useState({ drinks: [] });
  const [loading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [drinksPerPage] = useState(12);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink',
      );

      setData(result.data);
    };

    fetchData();
  }, []);

  const lastDrinkIndex = currentPage * drinksPerPage;
  const firstDrinkIndex = lastDrinkIndex - drinksPerPage;
  const currentDrink = data.drinks.slice(firstDrinkIndex, lastDrinkIndex);

  const paginate = pageNumber => setCurrentPage(pageNumber);
  const nextPage = pageNumber => setCurrentPage((prev) => {
    const number = prev;

    if (number === data.drinks.length/drinksPerPage) {
      return number
    }
      return (number + 1)
  });
  
  const prevPage = pageNumber => setCurrentPage((prev) => {
    const number = prev;

    if (number === 1) {
      return number
    }
      return (number - 1)
  });

  return (
    < >
       <DrinkCard drinks={currentDrink} loading={loading}/>
       <Pagination
         drinksPerPage={drinksPerPage}
         totalDrinks={data.drinks.length}
         paginate={paginate}
         prevPage={prevPage}
         nextPage={nextPage}
       />

    </>
  );
}

export default Home;
