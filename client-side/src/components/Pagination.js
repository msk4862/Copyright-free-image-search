import React from "react";

import "../styles/Pagination.scss";
import { getPageNumbers } from "../uitilities/paginatonUtils";

const Pagination = (props) => {
    function renderPageNumbers() {
        const pageNumbers = getPageNumbers(
            props.totalImages,
            props.imagesPerPage
        );

        return pageNumbers.map((number) => {
            if (number === props.currentPage) {
                return (
                    <li key={number} className="page-item active">
                        <button
                            onClick={() => props.paginate(number)}
                            className="page-link">
                            {number}
                        </button>
                    </li>
                );
            } else {
                return (
                    <li key={number}>
                        <button
                            onClick={() => props.paginate(number)}
                            className="page-link">
                            {number}
                        </button>
                    </li>
                );
            }
        });
    }

    return (
        <nav className="row justify-content-center m-0">
            <div className="conatainer-fluid">
                <ul className="pagination col-6 col-sm-4">
                    {renderPageNumbers()}
                </ul>
            </div>
        </nav>
    );
};

export default Pagination;
