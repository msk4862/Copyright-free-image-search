/**
 * To perform all filtering and sorting oprations on image array
 * @param  {Array} images
 * @param  {Array} filterKeys - Data will be filtered according to these keys of String
 * @param  {String} sortKey - Data will be sorted by according to this key
 * @returns {Array} Data after applying filtering and sorting
 */
export const dataParser = (images, filterKeys = [], sortKey = "") => {
    let filteredImages = images;

    // apply all filters
    for(let filterKey of filterKeys) {
        let filtered = applyFilter(filteredImages, filterKey);
        filteredImages = filtered;
    }


    return filteredImages;
}

/**
 * To filter images array accrording to given filterKey
 * @param  {Array} images
 * @param  {String} filterKey
 */
export const applyFilter = (images, filterKey) => {
    return images.filter(image => {
        return image.service === filterKey
    });
} 