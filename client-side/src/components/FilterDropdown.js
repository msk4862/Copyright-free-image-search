import React, { useContext, useState } from "react";
import { ImagesContext } from "../pages/Images";
import "../styles/filters.scss";

const FilterDropdown = ({ filterName, options }) => {
    const { setFilterKey } = useContext(ImagesContext);
    const [filter, setFilter] = useState(filterName);

    /**
     * To set clicked filter
     * @param  {String} key - Clicked filter
     */
    const onFilterSet = (key) => {
        setFilter(key);
        setFilterKey(key);
    };

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
                                onClick={() => onFilterSet(option)}>
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
