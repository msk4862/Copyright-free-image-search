import React, { useContext } from "react";
import { ImagesContext } from "../pages/Images";
import "../styles/filters.scss";

const FilterDropdown  = ({ filterName, options }) => {

    const { setFilterKey } = useContext(ImagesContext);

    return (
        <div className="dropdown">
            <span className="noselect" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {filterName} <i className="fas fa-caret-down"></i>
            </span>
            <div className="dropdown-menu">
                {options &&
                    options.map(option => {
                        return (
                            <span key={option} className="dropdown-item" onClick={() => setFilterKey(option)} >
                                {option} <i className="active fas fa-check"></i>
                            </span>
                        )})  
                }
            </div>
        </div>
    )
}

export default FilterDropdown;