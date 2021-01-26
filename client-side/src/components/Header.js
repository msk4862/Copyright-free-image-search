import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/header.scss";
import logo_sm from "../assets/imgs/logo_sm.png";

const Header = (props) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (searchTerm.trim() !== "")
            props.onSubmit(searchTerm);
    };

    return (
        <nav className="nav navbar navbar-small">
            <div className="logo">
                <Link to={"/"}>
                    <img src={logo_sm} alt="logo"/>
                </Link>
            </div>
            <form className="col-12 col-sm-8 col-md-4" onSubmit={handleSubmit}>
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