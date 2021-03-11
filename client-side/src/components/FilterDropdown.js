import React, { useContext } from "react";
import { ImagesContext } from "../pages/Images";
import Dropdown from "./Dropdown";
import "../styles/filterDropdown.scss";

const FilterDropdown = ({ filterName, options }) => {
    const { setFilterKey, filterKeys } = useContext(ImagesContext);

    /**
     * Passing filterKey to main setFilterKey method
     * @param  {} _
     * @param  {String} filterKey
     */
    const onFilterSet = (_, filterKey) => {
        setFilterKey(filterName, filterKey);
    };

    const filter = filterKeys[filterName] || filterName;

    return <Dropdown title={filter} options={options} onSelect={onFilterSet} />;
};

export default FilterDropdown;
