import React from "react";

import "../styles/ImageList.css";
import ImageCard from "./ImageCard";
import LoadSVG from "../components/LoaderSVG";

const ImageList = (props) => {
  function renderList() {
    if (props.error) {
      return <div className="empty">Something went wrong!</div>;
    } else if (props.images === null && !props.loading) {
      return <div className="empty">Type something in search bar...</div>;
    } else if (props.loading) {
      return (
        <div className="empty">
          <LoadSVG />
          <p className="load-text">Searching...</p>
        </div>
      );
    }

    return <div className="image-list container-fluid">{renderCards()}</div>;
  }

  function renderCards() {
    return props.images.map((image) => {
      return <ImageCard key={image.id} image={image} />;
    });
  }

  return <>{renderList()}</>;
};

export default ImageList;
