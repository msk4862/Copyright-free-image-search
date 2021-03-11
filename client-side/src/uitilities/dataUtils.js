import { OWNER_FILTER, ORIENTATION_FILTER } from "./Constants";

/**
 * To perform all filtering and sorting oprations on image array
 * @param  {Array} images
 * @param  {Array} filterKeys - Data will be filtered according to these keys of String
 * @param  {String} sortKey - Data will be sorted by according to this key
 * @returns {Array} Data after applying filtering and sorting
 */
export const dataParser = (images, filterKeys = {}, sortKey = "") => {
    let filteredImages = images;

    // apply all filters
    // for (let filterKey of filterKeys) {
    //     let filtered = applyFilter(filteredImages, filterKey);
    //     filteredImages = filtered;
    // }

    for (let key in filterKeys) {
        if (filterKeys.hasOwnProperty(key)) {
            switch (key) {
                case OWNER_FILTER.NAME:
                    filteredImages = applyOwnerFilter(
                        filteredImages,
                        filterKeys[key]
                    );
                    break;
                case ORIENTATION_FILTER.NAME:
                    filteredImages = applyOrientationFilter(
                        filteredImages,
                        filterKeys[key]
                    );
                    break;
                default:
            }
            console.log(key, filterKeys[key]);
        }
    }

    return filteredImages;
};

/**
 * To filter images array accrording to given image owner
 * @param  {Array} images
 * @param  {String} owner
 * @returns {Array} filtered array
 */
export const applyOwnerFilter = (images, owner) => {
    return images.filter((image) => {
        return image.service === owner;
    });
};

/**
 * @param  {Array} images
 * @param  {String} orientation Landscape, Potrait
 */
export const applyOrientationFilter = (images, orientation) => {
    return images.filter((image) => {
        if (orientation === ORIENTATION_FILTER.VALUES[0])
            return image.width > image.height;
        return image.width <= image.height;
    });
};

/**
 * To convert the first character of string to uppercase
 * @param  {String} str
 * @returns {String} Capitalized string
 */
export const capitalize = (str) => {
    str = str.trim();
    return str[0].toUpperCase() + str.substr(1);
};

/**
 * To form a page title based on search
 * @param  {String} searchTerm
 */
export const getPageTitle = (searchTerm) => {
    searchTerm = capitalize(searchTerm);
    return `Stunning ${searchTerm} Photos | Download free Images of ${searchTerm}`;
};
