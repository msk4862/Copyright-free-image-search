import React from "react";
import FilterDropdown from "./FilterDropdown";
import "../styles/filters.scss";  

const Filters  = ({ totalProviders }) => {

    return (
        <div className="image-filters">
            <FilterDropdown 
                filterName={"Owner"} 
                options={totalProviders}
            />
        </div>
    )
}

export default Filters;