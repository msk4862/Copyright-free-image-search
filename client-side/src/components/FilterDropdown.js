import React, { useContext } from "react";
import { ImagesContext } from "../pages/Images";
import "../styles/filters.scss";

const FilterDropdown = ({ filterName, options, setFilter }) => {
    const { filterKeys } = useContext(ImagesContext);

    const filter = filterKeys[filterName] || filterName;
    return (
        <div className="dropdown">
            <span
                className="noselect"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                {filter} <i className="fas fa-caret-down"></i>
            </span>
            <div className="dropdown-menu">
                {options &&
                    options.map((option) => {
                        return (
                            <span
                                key={option}
                                className="dropdown-item"
                                onClick={() => setFilter(filterName, option)}>
                                {option}{" "}
                                {filter === option && (
                                    <i className="active fas fa-check"></i>
                                )}
                            </span>
                        );
                    })}
            </div>
        </div>
    );
};

export default FilterDropdown;
