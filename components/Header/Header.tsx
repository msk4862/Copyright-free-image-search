import Image from 'next/image';
import { SearchBar } from '../SearchBar';

import './Header.scss';

export const Header = () => {
  return (
    <div className="header flex z-0">
      <div className="z-10 flex flex-col items-center justify-center w-full">
        <Image
          src={'/images/logo_lg.png'}
          alt="logo"
          width={200}
          height={150}
        />
        <div className="pt-6 md:pt-12 lg:pt-14 flex flex-col text-center">
          <p className="text-lg md:text-2xl lg:text-3xl font-medium">
            Stunning and copyright free images
          </p>
          <p className="pt-3 md:pt-5 text-xs md:text-base text-slate-200	font-light">
            Tired of searching copyright free images from diffrent websites? Try
            using NCI which searches copyright free images from across the
            popular platforms and shows you the results in a single platform.
          </p>
        </div>
        <SearchBar className="w-full md:w-2/3 pl-4 pr-4 md:pl-0 md:pr-0 mt-4" />
      </div>
    </div>
  );
};
