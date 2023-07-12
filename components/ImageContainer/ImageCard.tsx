'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
    // resizing elements if screen size is changing
    window.addEventListener('resize', resizeGridItem);

    return () => window.removeEventListener('resize', resizeGridItem);
  }, []);

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
    <div
      className="image-card relative overflow-hidden"
      style={{ gridRowEnd: `span ${rowSpan}` }}
    >
      <Link role="button" href={url} target="_blank" rel="noopener noreferrer">
        <Image
          ref={imageRef}
          className="image block w-full h-auto object-cover z-0 hover:scale-105"
          onLoad={resizeGridItem}
          src={previewURL}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO8Ww8AAj8BXkQ+xPEAAAAASUVORK5CYII="
          loading="eager"
          alt={`${service} image by ${author}`}
          width={70}
          height={70}
          quality={40}
        />
      </Link>
      <div className="image-card__overlay absolute left-0 right-0 bottom-0 h-0 overflow-x-hidden z-10 w-full">
        <div className="flex justify-between items-center h-full pl-4 pr-4">
          <span className="cursor-pointer">{author}</span>
          <a
            href={serviceUrl}
            className="hover:text-white"
            rel="noopener noreferrer"
            target="_blank"
          >
            {service}
          </a>
        </div>
      </div>
    </div>
  );
};
