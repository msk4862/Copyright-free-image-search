import React, { useEffect, useRef, useState } from "react";
import imagesLoaded from "imagesloaded";
import "../styles/ImageCard.scss";

const ImageCard = ({ url, previewURL, author, service, serviceUrl }) => {
    const [rowSpan, setRowSpan] = useState(0);
    const imageRef = useRef(null);

    useEffect(() => {
        const imageNode = imageRef.current;
        resizeGridItem(imageNode);

        // resizing elements if screen size is changing
        window.addEventListener("resize", resizeGridItem);

        // when image is fully loaded
        imagesLoaded(imageNode, resizeInstance);

        // componentWillUnmount
        return () => window.removeEventListener("resize", resizeGridItem);
        // eslint-disable-next-line
    }, []);

    function resizeInstance(instance) {
        const item = instance.elements[0];
        resizeGridItem(item);
    }

    const resizeGridItem = (item) => {
        // from css properties
        const gridGap = 10;
        const gridAutoRows = 5;
        if (imageRef && imageRef.current) {
            const rowSpan = Math.ceil(
                (imageRef.current.getBoundingClientRect().height + gridGap) /
                    (gridAutoRows + gridGap)
            );
            setRowSpan(rowSpan);
        }
    };

    return (
        <div className="imgCard" style={{ gridRowEnd: `span ${rowSpan}` }}>
            <a
                role="button"
                href={url}
                target="_blank"
                rel="noopener noreferrer">
                <img
                    ref={imageRef}
                    className="image"
                    src={previewURL}
                    alt={service + " image by " + author}
                />
            </a>
            <div className="overlay">
                <image-meta>
                    <span>{author}</span>
                    <a
                        href={serviceUrl}
                        rel="noopener noreferrer"
                        target="_blank">
                        {service}
                    </a>
                </image-meta>
            </div>
        </div>
    );
};

export default ImageCard;
