import React, { useEffect, useRef, useState } from "react";
import "../styles/ImageCard.scss";

const ImageCard = ({ url, previewURL, author, service }) => {
    const [span, setSpan] = useState(0);
    const imageRef = useRef(null);

    useEffect(() => {
        const imageNode = imageRef.current;
        imageNode.addEventListener("load", setSpanToImage);

        return () => imageNode.removeEventListener("load", setSpanToImage);
    }, []);

    const setSpanToImage = () => {
        if (imageRef.current) {
            const spanValue = Math.ceil(imageRef.current.clientHeight / 10);
            setSpan(spanValue);
        }
    };

    return (
        <div
            className="row imgCard justify-content-center"
            style={{ gridRowEnd: `span ${span}` }}>
            <img
                className="col-11"
                ref={imageRef}
                src={previewURL}
                alt={service + " image by " + author}
            />
            <div className="row overlay justify-content-center">
                <a
                    className="btn"
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer">
                    View Image
                </a>
            </div>
        </div>
    );
};

export default ImageCard;
