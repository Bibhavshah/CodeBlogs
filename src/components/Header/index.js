import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import {
  DribbbleIcon,
  GithubIcon,
  LinkedinIcon,
  MoonIcon,
  TwitterIcon,
} from '../Icons';

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between p-4 px-10">
      <Logo />
      <nav className="w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize flex items-center fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50">
        <Link href="/" className="mr-2">
          Home
        </Link>
        <Link href="/about" className="mx-2">
          About
        </Link>
        <Link href="/contact" className="mx-2">
          Contact-Us
        </Link>
        <button>
          <MoonIcon />
        </button>
      </nav>
      <div>
        <a href="http://example.com" className="inline-block w-6 h-6 mr-4 ">
          <LinkedinIcon className="hover:scale-125 transition-transform ease-in-out delay-75" />
        </a>
        <a href="http://example.com" className="inline-block w-6 h-6 mr-4 ">
          <TwitterIcon className="hover:scale-125 transition-transform ease-in-out delay-75" />
        </a>
        <a href="http://example.com" className="inline-block w-6 h-6 mr-4 ">
          <GithubIcon className="hover:scale-125 transition-transform ease-in-out delay-75" />
        </a>
        <a href="http://example.com" className="inline-block w-6 h-6 mr-4 ">
          <DribbbleIcon className="hover:scale-125 transition-transform ease-in-out delay-75" />
        </a>
      </div>
    </header>
  );
};

export default Header;
