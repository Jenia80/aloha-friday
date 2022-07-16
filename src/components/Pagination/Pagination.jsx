import React from 'react';
import "./Pagination.scss";

const Pagination = ({drinksPerPage,totalDrinks, paginate,prevPage,nextPage}) => {
  const pageNumbers = [];

  for (let i=1; i<= Math.ceil(totalDrinks/drinksPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <div className="pagination">
      <a 
       href="!#" 
       onClick={() => prevPage()}
       className="pagination__link"
      >
        {'<-'}
      </a>

      {pageNumbers.map(number => (
         <a href="!#" key={number} className="pagination__link" onClick={() => paginate(number)}>
           {number}
         </a>

        ))}

      <a 
        href="!#" 
        onClick={() => nextPage()}
        className="pagination__link"
      >
        {'->'}
      </a>
    </div>
  )
}

export default Pagination;
