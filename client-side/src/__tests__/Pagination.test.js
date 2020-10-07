import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";

import Pagination from "../components/Pagination";

afterEach(cleanup);
test("Testing Pagination functionality", () => {
    const totalImages = 50;
    const imagesPerPage = 10;
    const currentPage = 1;
    const paginateHandler = jest.fn();

    const { container, getByText } = render(
        <Pagination
            totalImages={totalImages}
            imagesPerPage={imagesPerPage}
            currentPage={currentPage}
            paginate={paginateHandler}
        />
    );

    const pagenumbersNodes = container.querySelectorAll("li");
    // clicking second page
    const selectedAnchor = getByText("2");
    fireEvent.click(selectedAnchor);

    // checking if active class is set for current page
    expect(getByText(currentPage.toString()).parentElement).toHaveClass(
        "page-item active"
    );
    // checking if pages are calculated correctly
    expect(pagenumbersNodes.length).toEqual(
        Math.ceil(totalImages / imagesPerPage)
    );
    //checking if changing page works
    expect(paginateHandler).toHaveBeenCalledTimes(1);
    expect(paginateHandler).toHaveBeenCalledWith(2);
});
