import React from "react";

import "../styles/ImageList.css";
import ImageCard from "./ImageCard";
import loading from "../imgs/search.png";

function ImageList(props) {
  function renderList() {
    if (props.error) {
      return <div className="empty">Something went wrong!</div>;
    } else if (props.images === null && !props.loading) {
      return <div className="empty">Type something in search bar...</div>;
    } else if (props.loading) {
      return (
        <div className="empty">
          <img className="load" src={loading} alt="loading"></img>
          <p className="load-text">searching...</p>
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

  return <div>{renderList()}</div>;
}

export default ImageList;
