'use client';
import React from 'react';
import {
  DribbbleIcon,
  GithubIcon,
  LinkedinIcon,
  MoonIcon,
  TwitterIcon,
} from '../Icons';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

const Footer = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <footer className="w-11/12 mx-auto flex flex-col items-center bg-dark text-light rounded-2xl">
      <h1 className="mt-16 font-medium text-center capitalize text-2xl px-4">
        <span>Interesting Stories</span> | <span>Updates</span> |{' '}
        <span>Guides</span>
      </h1>
      <p className="mt-5 px-4 text-center w-full text-base">
        Subscribe to learn about new technology and updates. Join over 5000+
        members community to stay up to date with latest news.
      </p>
      <form
        className="mt-6 w-fit flex items-strech bg-light p-2 rounded"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          placeholder="Enter your email"
          className="text-dark bg-transparent cursor-pointer font-medium rounded pl-0 px-5 pb-1 mr-2 border-dark focus:outline-none border-0 border-b border-solid"
          {...register('Enter your email', { required: true })}
        />
        <input
          type="submit"
          placeholder="Submit"
          className="bg-dark text-light  cursor-pointer font-medium rounded px-5 py-1"
        />
      </form>
      <div className="flex mt-8 items-center mb-32">
        <a href="http://example.com" className="inline-block w-6 h-6 mr-4 ">
          <LinkedinIcon className="hover:scale-125 transition-transform ease-in-out delay-75" />
        </a>
        <a href="http://example.com" className="inline-block w-6 h-6 mr-4 ">
          <TwitterIcon className="hover:scale-125 transition-transform ease-in-out delay-75" />
        </a>
        <a
          href="http://example.com"
          className="inline-block w-6 h-6 mr-4 fill-light"
        >
          <GithubIcon className="hover:scale-125 transition-transform ease-in-out delay-75" />
        </a>
        <a href="http://example.com" className="inline-block w-6 h-6 mr-4 ">
          <DribbbleIcon className="hover:scale-125 transition-transform ease-in-out delay-75" />
        </a>
      </div>
      <div className="w-full flex items-center justify-between py-6 font-medium border-t border-solid border-light">
        <p className="pl-16">©2023 CodeBucks. All rights reserved.</p>
        <Link href="/sitemap.xml">
          {' '}
          <u>sitemap.xml</u>{' '}
        </Link>
        <p className="pr-16">
          Made with ♥ by <span className="underline">Bibhav Shah</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
