import React, { useContext } from "react";
import { ImagesContext } from "../pages/Images";
import Dropdown from "./Dropdown";
import "../styles/filterDropdown.scss";

const SortingDropdown = ({ sortTitle, options }) => {
    const { setSortKey, sortKey } = useContext(ImagesContext);

    /**
     * Passing sortKey to main setSortKey method
     * @param  {} _
     * @param  {String} sortKey
     */
    const onSetSortKey = (_, sortKey) => {
        console.log(sortKey);
        setSortKey(sortKey);
    };

    const title = sortKey || sortTitle;

    return <Dropdown title={title} options={options} onSelect={onSetSortKey} />;
};

export default SortingDropdown;
