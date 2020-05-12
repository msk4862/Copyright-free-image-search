import React from "react";

import "../styles/SearchBar.css";
import { TITLE } from "../uitilities/Constants";

class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {
      serachTerm: "",
    };
    //NO need to bind while using ARROW METHODS
    //this.handleChange = this.handleChange.bind(this)
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
        <div className="row header">{TITLE}</div>
        <div className="d-flex justify-content-center row disc mt-auto">
          <div className="col-10 col-sm-8 flex-column">
            <p>Stunning and copyright free images</p>
            <p>
              Tired of searching images from diffrent websites?
              <br /> Try using NCI which searches copyright free images from
              across the most popular platforms and shows you the results in a
              single platform.
            </p>
          </div>
        </div>

        <form className="mb-auto" onSubmit={this.handleSubmit}>
          <div className="row justify-content-center">
            <input
              className="col-10 col-sm-6 form-control"
              type="text"
              placeholder="Type something to search..."
              name="search"
              value={this.state.serachTerm}
              onChange={this.handleChange}
            />
            <button type="submit" className="btn btn-success">
              Search
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
