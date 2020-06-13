import React, { lazy, Suspense } from "react";

import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import API from "./apis/imageAPI";
import { getCurrentPageImages } from "./uitilities/paginatonUtils";
import "./styles/base.scss";

// using lazy loading
const ImageList = lazy(() => import("./components/ImageList"));
const Pagination = lazy(() => import("./components/Pagination"));

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      images: null,
      loading: false,
      error: false,
      currentPage: 1,
      imagesPerPage: 25,
    };
  }

  componentDidMount() {
    var DEFAULT = "nature";
    this.onSearchSubmit(DEFAULT);
  }

  onSearchSubmit = async (term) => {
    console.log(term);
    this.setState({
      error: false,
      loading: true,
      currentPage: 1,
    });

    await API.get("images/", {
      params: {
        img: term,
      },
    })
      .then((res) => {
        this.setState({
          images: res.data,
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

  //Change page number
  paginate = (pageNumber) => {
    this.setState({
      currentPage: pageNumber,
    });
  };

  renderPagination = () => {
    return 
  }

  render() {
    let currentImages;
    let totalImages = 0;

    const { images, currentPage, imagesPerPage } = this.state;

    if (images) {
      //Get images for current page
      currentImages = getCurrentPageImages(currentPage, imagesPerPage, images);
      totalImages = images.length;
    }

    return (
      <div className="d-flex flex-column">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <Suspense fallback={<h1>Loading...</h1>}>
          <ImageList
            images={currentImages}
            loading={this.state.loading}
            error={this.state.error}
          />
          {!this.state.loading ? 
            <Pagination
              totalImages={totalImages}
              imagesPerPage={this.state.imagesPerPage}
              currentPage={this.state.currentPage}
              paginate={this.paginate}
            /> 
            :
            null
          }
        </Suspense>
        <Footer />
      </div>
    );
  }
}

export default App;
