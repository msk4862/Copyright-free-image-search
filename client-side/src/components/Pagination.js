import React from "react";

import "../styles/Pagination.scss";
import { getPageNumbers } from "../uitilities/paginatonUtils";

const Pagination = (props) => {

    const {totalImages, imagesPerPage, currentPage} = props;

    const renderPageNumbers = () => {
        const pages = getPageNumbers(
            totalImages,
            imagesPerPage
        );

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
