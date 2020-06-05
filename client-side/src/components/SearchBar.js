import React from "react";

import "../styles/SearchBar.scss";
import { TITLE, TEXTS } from "../uitilities/Constants";

class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {
      serachTerm: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      serachTerm: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.serachTerm);
  };

  render() {
    return (
      <div className="d-flex flex-column search-bar">
        <h2>{TITLE}</h2>
        <div className="d-flex desc justify-content-center">
          <div className="col-10 col-sm-8 flex-column">
            <p>{TEXTS.h1}</p>
            <p>{TEXTS.h2}</p>
          </div>
        </div>

        <form className="mb-auto" onSubmit={this.handleSubmit}>
          <div className="row justify-content-center m-0">
            <input
              className="col-10 col-sm-6 form-control"
              type="text"
              placeholder="Type something to search..."
              name="search"
              value={this.state.serachTerm}
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
