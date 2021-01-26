import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "../styles/SearchBar.scss";
import { TEXTS } from "../uitilities/Constants";
import logo_sm from "../assets/imgs/logo_sm.png";
import logo_lg from "../assets/imgs/logo_lg.png";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [redirect, setRedirect] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setRedirect(true);
    };

    const { h1, h2, h2_small_devices } = TEXTS;
    return redirect ? (
        // redirect to `Images` page
        <Redirect
            to={{
                pathname: `/search/${searchTerm}`,
            }}
        />
    ) : (
        <div className="d-flex flex-column search-bar">
            <div className="logo">
                <Link to={"/"}>
                    <img
                        className="d-none d-sm-block"
                        src={logo_lg}
                        alt="logo"
                    />
                    <img
                        className="d-block d-sm-none"
                        src={logo_sm}
                        alt="logo"
                    />
                </Link>
            </div>
            <div className="d-flex desc justify-content-center">
                <div className="col-12 col-sm-8 flex-column">
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
                        placeholder={`Try "apple" or "cat"`}
                        name="search"
                        value={searchTerm}
                        onChange={(evt) => setSearchTerm(evt.target.value)}
                    />
                    <button
                        type="submit"
                        aria-label="Search"
                        className="btn search-btn align-items-stretch">
                        Search
                    </button>
                    <button
                        type="submit"
                        className="btn search-btn-small"
                        aria-label="Search">
                        <i className="fas fa-search"></i>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
