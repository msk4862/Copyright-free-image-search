import React, { Component, lazy, Suspense } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import API from "../apis/imageAPI";
import LoadSVG from "../components/LoaderSVG";
import { DEFAULT_SEARCH_TERM, IMAGES_PER_PAGE } from "../uitilities/Constants";
import { getCurrentPageImages } from "../uitilities/paginatonUtils";
import "../styles/base.scss";
import history from "../history";

// using lazy loading
const ImageList = lazy(() => import("../components/ImageList"));
const Pagination = lazy(() => import("../components/Pagination"));

class Images extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: null,
            loading: false,
            error: false,
            currentPage: 1,
            imagesPerPage: IMAGES_PER_PAGE,
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
        });

        API.get("images/", {
            params: {
                img: term,
                per_page_images: IMAGES_PER_PAGE
            },
        })
            .then((res) => {
                this.setState({
                    images: res.data.result,
                });
                setTimeout(() => this.setState({ loading: false }), 2500);
            })
            .catch((err) => {
                console.log(err);
                this.setState({
                    error: true,
                });
                setTimeout(() => this.setState({ loading: false }), 2500);
            });
    };

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
        let currentImages;
        let totalImages = 0;

        const { images, currentPage, imagesPerPage, loading, error } = this.state;

        if (images) {
            //Get images for current page
            currentImages = getCurrentPageImages(
                currentPage,
                imagesPerPage,
                images
            );
            totalImages = images.length;
        }

        return (
            <div className="d-flex flex-column">
                <Header onSubmit={this.upadeQuery} />
                <Suspense fallback={<LoadSVG />}>
                    <ImageList
                        images={currentImages}
                        loading={loading}
                        error={error}
                    />
                    {!this.state.loading ? (
                        <Pagination
                            totalImages={totalImages}
                            imagesPerPage={imagesPerPage}
                            currentPage={currentPage}
                            paginate={this.paginate}
                        />
                    ) : null}
                </Suspense>
                <Footer />
            </div>
        );
    }
}

export default Images;
