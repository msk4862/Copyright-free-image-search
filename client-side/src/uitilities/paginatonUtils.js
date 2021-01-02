/**
 * Calculates and returns the array of page nos. that will be required for `totalImages` and 
 * if one page can have maximum `imagesPerPage` images
 * @param  {Number} totalImages
 * @param  {Number} imagesPerPage
 */
export const getPageNumbers = (totalImages, imagesPerPage) => {
    // finding availables page numbers
    const pages = [];
    for (let i = 1; i <= Math.ceil(totalImages / imagesPerPage); ++i) {
        pages.push(i);
    }
    return pages;
};

/**
 * Returns the `images` for the `currentPage` if one page can have maximum `imagesPerPage` images
 * @param  {Number} currentPage
 * @param  {Number} imagesPerPage
 * @param  {Array} images
 */
export const getCurrentPageImages = (currentPage, imagesPerPage, images) => {
    const indexOfLastImage = currentPage * imagesPerPage;
    const indexOfFirstImage = indexOfLastImage - imagesPerPage;

    const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

    return currentImages;
};
