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
        <div className="pt-20 flex flex-col items-center col-span-10">
          <p className=" text-3xl col-auto font-medium">
            Stunning and copyright free images
          </p>
          <p className="pt-5 text-slate-200	font-light">
            Tired of searching copyright free images from diffrent websites? Try
            using NCI which searches copyright free images from across the
            popular platforms and shows you the results in a single platform.
          </p>
        </div>
        <SearchBar className="w-2/3 mt-4" />
      </div>
    </div>
  );
};
