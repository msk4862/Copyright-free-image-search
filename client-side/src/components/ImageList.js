import React from "react";

import "../styles/ImageList.scss";
import ImageCard from "./ImageCard";
import LoadSVG from "../components/LoaderSVG";
import { TEXTS } from "../uitilities/Constants";

const ImageList = ({ error, images, loading }) => {
    function renderList() {
        if (error) {
            return (
                <div className="empty">
                    <h2>{TEXTS.errorMessage}</h2>
                </div>
            );
        }
        if (!images && !loading) {
            return (
                <div className="empty">
                    <h2>{TEXTS.emptyBodyText}</h2>
                </div>
            );
        }
        if (loading) {
            return (
                <div className="empty">
                    <LoadSVG />
                    <p>Searching...</p>
                </div>
            );
        }

        return (
            <div className="image-list container-fluid">{renderCards()}</div>
        );
    }

    function renderCards() {
        return images.map((image) => {
            const { url, previewURL, author, service, serviceUrl } = image;
            return (
                <ImageCard
                    key={image.id}
                    url={url}
                    previewURL={previewURL}
                    author={author}
                    service={service}
                    serviceUrl={serviceUrl}
                />
            );
        });
    }

    return <>{renderList()}</>;
};

export default ImageList;
