import React from "react";

import "../styles/SearchBar.scss";
import { TITLE, TEXTS } from "../uitilities/Constants";

class SearchBar extends React.Component {
    constructor() {
        super();

        this.state = {
            searchTerm: "",
        };
    }

    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { searchTerm } = this.state;
        if(searchTerm!=="")
            this.props.onSubmit(this.state.searchTerm);
    };

    render() {
        return (
            <div className="d-flex flex-column search-bar">
                <h1>{TITLE}</h1>
                <div className="d-flex desc justify-content-center">
                    <div className="col-10 col-sm-8 flex-column">
                        <h2>{TEXTS.h1}</h2>
                        <small>{TEXTS.h2}</small>
                    </div>
                </div>

                <form className="mb-auto" onSubmit={this.handleSubmit}>
                    <div className="row justify-content-center m-0">
                        <input
                            className="col-10 col-sm-6 form-control"
                            type="text"
                            placeholder="Type something to search..."
                            name="search"
                            value={this.state.searchTerm}
                            onChange={this.handleChange}
                        />
                        <button type="submit" className="btn">
                            Search
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
