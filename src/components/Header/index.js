"use client"
import Link from "next/link";
import Logo from "./Logo";
import { GithubIcon, InstagramIcon, MoonIcon, SunIcon } from "../Icons";
import siteMetadata from "@/src/utils/siteMetaData";
import { useThemeSwitch } from "../Hooks/useThemeSwitch";
import { cx } from "@/src/utils";

const Header = () => {
  const [mode, setMode] = useThemeSwitch();

  return (
    <header className="w-full p-4 flex items-center justify-between">
      <Logo />

      <nav className="w-max py-3 px-8 border border-solid border-dark dark:border-light rounded-full font-medium capitalize items-center flex">
        <Link href="/" className="mr-2">Home</Link>
        <button onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={cx("w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1",
            mode === "light" ? "bg-dark text-light" : "bg-light text-dark")}
          aria-label="theme-switcher"
        >
          {mode === "light" ? <MoonIcon className={"fill-dark"} /> : <SunIcon className={"fill-dark"} />}
        </button>
      </nav>

      <div className="hidden sm:flex items-center">
        <a href={siteMetadata.github} rel="noopener noreferrer" className="inline-block w-6 h-6 mr-4" aria-label="Check my profile on Github" target="_blank"><GithubIcon className="hover:scale-125 transition-all ease duration-200 dark:fill-light" /></a>
        <a href={siteMetadata.instagram} rel="noopener noreferrer" className="inline-block w-6 h-6 mr-4" aria-label="Check my profile on Instagram" target="_blank"><InstagramIcon className="hover:scale-125 transition-all ease duration-200" /></a>
      </div>
    </header>
  )
}

export default Header;
