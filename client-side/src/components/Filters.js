import React, { useContext, useEffect } from "react";
import { ImagesContext } from "../pages/Images";
import FilterDropdown from "./FilterDropdown";
import "../styles/filters.scss";
import { OWNER_FILTER, ORIENTATION_FILTER } from "../uitilities/Constants";

const Filters = () => {
    const { setFilterKey, clearFilters, totalProviders } = useContext(
        ImagesContext
    );

    useEffect(() => {
        canShowFIlter();

        window.addEventListener("resize", canShowFIlter);
        return () => window.removeEventListener("resize", canShowFIlter);
    }, []);

    /**
     * To set clicked filter
     * @param  {String} value - Clicked filter value
     */
    const onFilterSet = (filterName, value) => {
        setFilterKey(filterName, value);
    };

    const canShowFIlter = () => {
        // show filters for pc screens
        if (window.innerWidth > 992)
            document
                .getElementById("collapsible-filter")
                .classList.replace("collapse", "collapse-show");
    };

    return (
        <div className="filters">
            <button
                className="filter-toggler"
                data-toggle="collapse"
                data-target="#collapsible-filter">
                <i className="fas fa-sliders-h"></i>
            </button>
            <div id="collapsible-filter" className="collapse">
                <div className="image-filters ">
                    <FilterDropdown
                        filterName={OWNER_FILTER.NAME}
                        options={totalProviders}
                        setFilter={onFilterSet}
                    />
                    <FilterDropdown
                        filterName={ORIENTATION_FILTER.NAME}
                        options={ORIENTATION_FILTER.VALUES}
                        setFilter={onFilterSet}
                    />
                    <input
                        type="button"
                        className="btn"
                        value="Clear Filters"
                        onClick={() => clearFilters()}
                    />
                </div>
            </div>
        </div>
    );
};

export default Filters;
