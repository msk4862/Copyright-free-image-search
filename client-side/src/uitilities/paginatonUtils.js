export const getPageNumbers = (totalImages, imagesPerPage) => {
    // finding availables page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalImages / imagesPerPage); ++i) {
      pageNumbers.push(i);
    }
    return pageNumbers;
};

export const getCurrentPageImages = (currentPage, imagesPerPage, images) => {
    
    const indexOfLastImage = currentPage * imagesPerPage;
    const indexOfFirstImage = indexOfLastImage - imagesPerPage;

    const currentImages = images.slice(
      indexOfFirstImage,
      indexOfLastImage
    );

    return currentImages;
}