import React, { useState } from "react";
import "../styles/SearchBar.scss";
import { TITLE, TEXTS } from "../uitilities/Constants";

const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (searchTerm.trim() !== "")
            props.onSubmit(searchTerm);
    };

    const { h1, h2, h2_small_devices } = TEXTS;
    return (
        <div className="d-flex flex-column search-bar">
            <h1>{TITLE}</h1>
            <div className="d-flex desc justify-content-center">
                <div className="col-10 col-sm-8 flex-column">
                    <h2>{h1}</h2>
                    <small className="d-none d-sm-block">{h2}</small>
                    <small className="d-block d-sm-none">
                        {h2_small_devices}
                    </small>
                </div>
            </div>

            <form className="mb-auto" onSubmit={handleSubmit}>
                <div className="row justify-content-center m-0">
                    <input
                        className="col-10 col-sm-6 form-control"
                        type="text"
                        placeholder="Type something to search..."
                        name="search"
                        value={searchTerm}
                        onChange={(evt) => setSearchTerm(evt.target.value)}
                    />
                    <button
                        type="submit"
                        className="btn search-btn align-items-stretch">
                        Search
                    </button>
                    <button
                        className="btn search-btn-small"
                        aria-label="Search">
                        <i className="fas fa-search"></i>
                    </button>
                </div>
            </form>
        </div>
    );
    
}

export default SearchBar;
