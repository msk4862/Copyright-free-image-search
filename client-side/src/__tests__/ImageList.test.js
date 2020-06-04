import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";

import ImageList from "../components/ImageList";
import { TEXTS } from "../uitilities/Constants";

afterEach(cleanup);
test("Error message renders if an error has occured", ()=> {
    const images = Array();
    const loading = false;
    const error = true;
    
    const {container, getByText} = render(
        <ImageList 
            images={images}
            loading={loading}
            error={error}
        />
    )

    const errorMessage = container.querySelector('div');

    // check if only error message is loading
    expect(container.children).toHaveLength(1);
    expect(errorMessage).toHaveTextContent(TEXTS.errorMessage);
    
});

