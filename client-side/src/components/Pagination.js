import React from "react";

import "../styles/Pagination.css";

const getPagenumbers = (totalImages, imagesPerPage) => {
  // finding availables page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalImages / imagesPerPage); ++i) {
    pageNumbers.push(i);
  }
  return pageNumbers;
};

const Pagination = props => {

  function renderPageNumbers() {
    const pageNumbers = getPagenumbers(props.totalImages, props.imagesPerPage);

    return pageNumbers.map((number) => {
      if (number === props.currentPage) {
        return (
          <li key={number} className="page-item active">
            <a
              onClick={() => props.paginate(number)}
              href="#"
              className="page-link">
              {number}
            </a>
          </li>
        );
      } 
      else {
        return (
          <li key={number} className="page-item">
            <a
              onClick={() => props.paginate(number)}
              href="#"
              className="page-link">
              {number}
            </a>
          </li>
        );
      }
    });
  }

  return (
    <nav className="row justify-content-center">
      <div className="conatainer-fluid">
        <ul className="pagination col-6 col-sm-4">{renderPageNumbers()}</ul>
      </div>
    </nav>
  );
}

export default Pagination;
