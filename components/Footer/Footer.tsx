import { SOCIALS_LINKS } from '@/utils/constants';
import { Twitter, Linkedin, GitHub } from 'react-feather';

import './Footer.scss';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="flex flex-col p-2 md:p-5 bg-blue-900 text-white justify-center items-center">
      {/* <div className="flex w-full justify-center gap-3 md:gap-5">
        <Link
          href={SOCIALS_LINKS.LINKEDIN}
          target="blank"
          aria-label="link to Linkedin"
        >
          <Linkedin className="social-icon w-6 md:w-8 hover:scale-110" />
        </Link>
        <Link
          href={SOCIALS_LINKS.GITHUB}
          target="blank"
          aria-label="link to Github"
        >
          <GitHub className="social-icon w-6 md:w-8 hover:scale-110" />
        </Link>
        <Link
          href={SOCIALS_LINKS.TWITTER}
          target="blank"
          aria-label="link to Twitter"
        >
          <Twitter className="social-icon w-6 md:w-8 hover:scale-110" />
        </Link>
      </div> */}
      {/* <div className="flex copyright justify-center mt-3 md:mt-5">
        <p className="text-sm md:text-base opacity-50">
          (No) Copyright &#x24B8; {new Date().getFullYear()} NCI | Developed by
          Raghib Hiader
        </p>
      </div> */}
      <div className="flex copyright justify-center mt-3 md:mt-5">
        <p className="text-sm md:text-base opacity-50">
          (No) Copyright &#x24B8; {new Date().getFullYear()} NCI
        </p>
      </div>
    </footer>
  );
};
