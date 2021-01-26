import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { BrowserRouter, Route } from "react-router-dom";
import SearchBar from "../components/SearchBar";

afterEach(cleanup);

test("Testing serach bar", () => {
    const searchTerm = "forest";
    const handleSubmit = jest.fn();

    const { container } = render(
        <BrowserRouter>
            <SearchBar onSubmit={handleSubmit} />
            <Route path={`/search/${searchTerm}`}>{searchTerm}</Route>
        </BrowserRouter>
    );

    const serachInput = container.querySelectorAll("input")[0];
    const searchButton = container.querySelectorAll("button")[0];

    //setting value by firing onChange event
    fireEvent.change(serachInput, { target: { value: searchTerm } });
    fireEvent.click(searchButton);

    /* (After redirect it renders an empty div if we don't provided the route)
       To ensure that user gets redirected to `/search/{searchTerm}` 
       We added a route for that specific url with a simple text as children
    */
    expect(container).toHaveTextContent(searchTerm);
});
