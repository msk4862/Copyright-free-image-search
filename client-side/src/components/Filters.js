import React from "react";
import FilterDropdown from "./FilterDropdown";
import "../styles/filters.scss";  

const Filters  = ({ totalProviders }) => {

    return (
        <div className="image-filters">
            <strong>Filter your search</strong>
            <FilterDropdown 
                filterName={"Owner"} 
                options={totalProviders}
            />
        </div>
    )
}

export default Filters;