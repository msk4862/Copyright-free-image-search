import React from "react";
import { getPageNumbers } from "../uitilities/paginatonUtils";

const Pagination = (props) => {
    // const { totalImages, imagesPerPage, currentPage } = props;
    // const pages = getPageNumbers(totalImages, imagesPerPage);

    const renderPageNumbers = () => {
        return pages.map((number) => {
            let activeCLass = number === currentPage ? "active" : "";
            return (
                <li key={number} className={`page-item ${activeCLass}`}>
                    <button
                        onClick={() => props.paginate(number)}
                        className="page-link">
                        {number}
                    </button>
                </li>
            );
        });
    };

    return (
        pages.length > 1 && (
            <nav>
                <ul className="d-flex flex-row justify-content-center mt-3 mb-3">
                    {renderPageNumbers()}
                </ul>
            </nav>
        )
    );
};

export default Pagination;
