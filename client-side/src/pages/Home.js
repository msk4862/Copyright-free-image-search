import React, { Component, lazy, Suspense } from "react";

import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import API from "../apis/imageAPI";
import LoadSVG from "../components/LoaderSVG";
import { DEFAULT_SEARCH_TERM, HOMEPAGE_IMAGE_COUNT } from "../uitilities/Constants";
import "../styles/base.scss";

// using lazy loading
const ImageList = lazy(() => import("../components/ImageList"));

class Home extends Component {
    constructor() {
        super();
        this.state = {
            images: null,
            loading: false,
            error: false,
            redirect: false,
        };
    }      

    componentDidMount() {
        API.get("images/", {
            params: {
                img: DEFAULT_SEARCH_TERM,
                per_page_images: HOMEPAGE_IMAGE_COUNT
            },
        })
            .then((res) => {
                this.setState({
                    images: res.data.result,
                });
            })
            .catch((err) => {
                console.log(err);
                this.setState({
                    error: true,
                });
            });
    }

    render() {
        const { images, loading, error } = this.state;
        return (
            <div className="d-flex flex-column">
                <SearchBar />
                <Suspense fallback={<LoadSVG />}>
                    <ImageList
                        images={images}
                        loading={loading}
                        error={error}
                    />
                </Suspense>
                <Footer />
            </div>
        );
    }
}

export default Home;
