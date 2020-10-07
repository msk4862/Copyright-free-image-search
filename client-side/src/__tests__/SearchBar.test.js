import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";

import SearchBar from "../components/SearchBar";

afterEach(cleanup);

test("Testing serach bar", () => {
    const handleSubmit = jest.fn();
    const { container, getByText } = render(
        <SearchBar onSubmit={handleSubmit} />
    );
    const searchTerm = "forest";
    const searchButton = getByText("Search");

    const serachInput = container.querySelectorAll("input")[0];

    //setting value by firing onChange event
    fireEvent.change(serachInput, { target: { value: searchTerm } });
    //firing click event
    fireEvent.click(searchButton);

    //Assertions
    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith(searchTerm);
});
