import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/header.scss";
import { TITLE, TITLE_SM } from "../uitilities/Constants";

const Header = (props) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (searchTerm.trim() !== "")
            props.onSubmit(searchTerm);
    };

    return (
        <nav className="nav navbar navbar-small">
            <Link to={"/"} className="navbar-brand">
                <h2 className="d-none d-sm-block" >{TITLE}</h2>
                <h2 className="d-block d-sm-none" to={"/"}>{TITLE_SM}</h2>
            </Link>
            
            <form className="col-10 col-sm-6 col-md-4 image-serach-nav" onSubmit={handleSubmit}>
                <div className="d-flex flex-row">
                    <input
                        className="form-control"
                        type="text"
                        placeholder={`Try "apple" or "cat"`}
                        name="search"
                        value={searchTerm}
                        onChange={(evt) => setSearchTerm(evt.target.value)}
                    />
                    <button
                        className=""
                        aria-label="Search">
                        <i className="fas fa-search"></i>
                    </button>
                </div>
            </form>
        </nav>
    )
}

export default Header;