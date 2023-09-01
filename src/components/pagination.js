import React from "react";

const Pagination = (props) => {
  const{page, totalPages, previousClick, nextClick} = props
  return (
    <div className="pagination-container">
      <button onClick={previousClick}>&laquo;</button>
      <div>{page} of {totalPages}</div>
      <button onClick={nextClick}>&raquo;</button>
    </div>
  )
}

export default Pagination