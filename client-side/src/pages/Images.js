import React, { Component, lazy, Suspense } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import API from "../apis/imageAPI";
import LoadSVG from "../components/LoaderSVG";
import history from "../history";
import Filters from "../components/Filters";
import "../styles/base.scss";
import { DEFAULT_SEARCH_TERM, MAX_IMAGES, MAX_IMAGES_PER_PAGE } from "../uitilities/Constants";
import { getCurrentPageImages } from "../uitilities/paginatonUtils";
import { dataParser } from "../uitilities/dataUtils";

export const ImagesContext = React.createContext(null);

// using lazy loading
const ImageList = lazy(() => import("../components/ImageList"));
const Pagination = lazy(() => import("../components/Pagination"));

class Images extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: null,
            parsedImages: null,
            loading: false,
            error: false,
            currentPage: 1,
            imagesPerPage: MAX_IMAGES_PER_PAGE,
            totalProviders: [],
            filterKeys: [],
        };
    }

    componentDidMount() {
        const searchTermFromUrl = this.props.match.params.term;
        let searchTerm = searchTermFromUrl ? searchTermFromUrl : DEFAULT_SEARCH_TERM;
        this.onSearchSubmit(searchTerm);
    }

    /**
     * Change query string in url
     * @param  {String} term
     */
    upadeQuery = (term) => {
        history.push(`/search/${term}`);
        this.onSearchSubmit(term);
    }

    /**
     * calls api to get images related to the provided search term
     * @param  {String} term
     */
    onSearchSubmit = (term) => {
        this.setState({
            error: false,
            loading: true,
            currentPage: 1,
            totalProviders: [],
        });

        API.get("images/", {
            params: {
                img: term,
                total_images: MAX_IMAGES
            },
        })
            .then((res) => {
                const { result, successfulServices } = res.data;
                this.setState({
                    images: result,
                    totalProviders: successfulServices,
                });
                setTimeout(() => this.setState({ loading: false }), 1000);
            })
            .catch((err) => {
                console.log(err);
                this.setState({
                    error: true,
                });
                setTimeout(() => this.setState({ loading: false }), 1000);
            });
    };

    setFilterKey = (key) => {
        this.setState({
            filterKeys: [key], 
            currentPage: 1,
        });
    }

    /**
     * Change page number to the requested page
     * @param  {Number} pageNumber
     */
    paginate = (pageNumber) => {
        this.setState({
            currentPage: pageNumber,
        });
    };

    render() {
        let currentPageImages = [];
        let totalImages = 0;
        let parsedImages = [];

        const { images, totalProviders, filterKeys, currentPage, imagesPerPage, loading, error } = this.state;

        if (images) {
            parsedImages = dataParser(images, filterKeys);
            totalImages = parsedImages.length;

            //Get images for current page
            currentPageImages = getCurrentPageImages(
                currentPage,
                imagesPerPage,
                parsedImages
            );
        }

        return (
            <div className="d-flex flex-column">
                <Header onSubmit={this.upadeQuery} />
                <Suspense fallback={<LoadSVG />}>
                    <ImagesContext.Provider 
                        value={{
                            setFilterKey: this.setFilterKey,
                        }}>
                        <Filters totalProviders={totalProviders}/>
                    </ImagesContext.Provider>
                    <ImageList
                            images={currentPageImages}
                            loading={loading}
                            error={error}
                    />
                    {!loading && !error &&
                        <Pagination
                            totalImages={totalImages}
                            imagesPerPage={imagesPerPage}
                            currentPage={currentPage}
                            paginate={this.paginate}
                        />
                    }
                </Suspense>
                <Footer />
            </div>
        );
    }
}

export default Images;
