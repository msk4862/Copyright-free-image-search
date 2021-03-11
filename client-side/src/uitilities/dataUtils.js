import { OWNER_FILTER, ORIENTATION_FILTER, SORT_KEYS } from "./Constants";

/**
 * To perform all filtering and sorting oprations on image array
 * @param  {Array} images
 * @param  {Object} filterKeys - Data will be filtered according to the keys of object
 * @param  {String} sortKey - Data will be sorted by according to this key
 * @returns {Array} Data after applying filtering and sorting
 */
export const dataParser = (images, filterKeys = {}, sortKey = "") => {
    let parsedImages = images;

    if (sortKey !== "") parsedImages = sortData(parsedImages, sortKey);

    if (Object.keys(filterKeys).length > 0)
        parsedImages = filterData(parsedImages, filterKeys);

    return parsedImages;
};

/**
 * Sort data based on sortKey
 * @param  {} images
 * @param  {} sortKey
 */
export const sortData = (images, sortKey) => {
    return images.sort((img1, img2) => {
        switch (sortKey) {
            // Popularity
            case SORT_KEYS[0]:
                return img2.likes - img1.likes;

            default:
                return -1;
        }
    });
};

/**
 * @param  {Array} images
 * @param  {Object} filterKeys
 */
export const filterData = (images, filterKeys) => {
    let filteredImages = images;

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
