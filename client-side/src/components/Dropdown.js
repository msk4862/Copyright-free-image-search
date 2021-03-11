import React from "react";
import "../styles/filterDropdown.scss";

const Dropdown = ({ title, options, onSelect }) => {
    return (
        <div className="dropdown">
            <span
                className="noselect"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                {title} <i className="fas fa-caret-down"></i>
            </span>
            <div className="dropdown-menu">
                {options &&
                    options.map((option) => {
                        return (
                            <span
                                key={option}
                                className="dropdown-item"
                                onClick={() => onSelect(title, option)}>
                                {option}{" "}
                                {title === option && (
                                    <i className="active fas fa-check"></i>
                                )}
                            </span>
                        );
                    })}
            </div>
        </div>
    );
};

export default Dropdown;
