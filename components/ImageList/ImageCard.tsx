'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
// import imagesLoaded from "imagesloaded";
import './ImageCard.scss';

type ImageCardProps = {
  url: string;
  previewURL: string;
  author: string;
  service: string;
  serviceUrl: string;
};

export const ImageCard = ({
  url,
  previewURL,
  author,
  service,
  serviceUrl,
}: ImageCardProps) => {
  const [rowSpan, setRowSpan] = useState(0);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // const imageNode = imageRef.current;
    // resizeGridItem(imageNode);

    // resizing elements if screen size is changing
    window.addEventListener('resize', resizeGridItem);

    // when image is fully loaded
    // imagesLoaded(imageNode, resizeInstance);

    // componentWillUnmount
    return () => window.removeEventListener('resize', resizeGridItem);
  }, []);

  // function resizeInstance(instance) {
  //   const item = instance.elements[0];
  //   resizeGridItem(item);
  // }

  const resizeGridItem = () => {
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
      <a role="button" href={url} target="_blank" rel="noopener noreferrer">
        <Image
          ref={imageRef}
          className="image"
          // onLoad={resizeInstance}
          src={previewURL}
          alt={`${service} image by ${author}`}
        />
      </a>
      <div className="overlay">
        <div>
          <span>{author}</span>
          <a href={serviceUrl} rel="noopener noreferrer" target="_blank">
            {service}
          </a>
        </div>
      </div>
    </div>
  );
};
