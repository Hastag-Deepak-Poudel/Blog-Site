import { GithubIcon, InstagramIcon } from "../Icons";
import Link from "next/link";
import siteMetadata from "@/src/utils/siteMetaData";

const Footer = () => {
  return (
    <footer className="mt-16 rounded-2xl bg-dark dark:bg-accentDark/90 m-2 sm:m-10 flex flex-col items-center text-light dark:text-dark px-6">
      <div className="flex items-center mt-8">
        <a
          href={siteMetadata.github}
          className="inline-block w-6 h-6 mr-4 fill-light"
          aria-label="Check my profile on Github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon className="fill-light dark:fill-dark hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href={siteMetadata.instagram}
          className="inline-block w-6 h-6 mr-4"
          aria-label="Check my profile on Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
      </div>

      <div className="w-full mt-8 relative font-medium border-t border-solid border-light py-6 px-8 flex flex-col md:flex-row items-center justify-between">
        <span className="text-center">
          &copy;{new Date().getFullYear()} Deepak Poudel. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
