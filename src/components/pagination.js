import React from "react";
import next from "./images/next.svg"
import previus from "./images/previus.svg"


const Pagination = (props) => {
  const{page, totalPages, previousClick, nextClick} = props
  return (
    <div className="pagination-container">
      <img src={previus} alt="previus button" onClick={previousClick} /><div></div>
      <div>{page} of {totalPages}</div>
      <img src={next} alt="next button" onClick={nextClick} />
    </div>
  )
}

export default Pagination