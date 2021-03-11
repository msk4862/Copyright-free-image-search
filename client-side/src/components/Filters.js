import React, { useContext, useEffect } from "react";
import { ImagesContext } from "../pages/Images";
import FilterDropdown from "./FilterDropdown";
import SortingDropdown from "./SortingDropdown";
import "../styles/filters.scss";
import {
    OWNER_FILTER,
    ORIENTATION_FILTER,
    SORT_KEYS,
} from "../uitilities/Constants";

const Filters = () => {
    const { clearFilters, totalProviders } = useContext(ImagesContext);

    useEffect(() => {
        canShowFIlter();

        window.addEventListener("resize", canShowFIlter);
        return () => window.removeEventListener("resize", canShowFIlter);
    }, []);

    const canShowFIlter = () => {
        // show filters for pc screens
        if (window.innerWidth > 992)
            document
                .getElementById("collapsible-filter")
                .classList.replace("collapse", "collapse-show");
    };

    return (
        <div className="data-parsers">
            <div className="sorting">
                <SortingDropdown sortTitle={"Sort By"} options={SORT_KEYS} />
            </div>

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
                        />
                        <FilterDropdown
                            filterName={ORIENTATION_FILTER.NAME}
                            options={ORIENTATION_FILTER.VALUES}
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
        </div>
    );
};

export default Filters;
