import Image from 'next/image';
import headerImg from '@/public/header.jpg';
import logo from '@/public/logo_lg.png';
import { SearchBar } from '../SearchBar';

export const Header = () => {
  return (
    <div className="header flex z-0">
      {/* <Image
        className="absolute w-screen"
        src={headerImg}
        alt="header background"
        height={200}
        style={{ objectPosition: 'center' }}
      /> */}
      <div className="z-10 pt-2 flex flex-col items-center justify-center w-full">
        <Image src={logo} alt="logo" width={150} />
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
