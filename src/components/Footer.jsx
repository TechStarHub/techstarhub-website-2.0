import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';

export default function Footer() {
  const mode = useSelector((state) => state.mode.mode);
  const isDark = mode === 'dark' ? true : false;

  return (
    <footer
      className="flex flex-col items-center gap-3 p-4 lg:p-8 lg:pb-4 w-full border-t-[1px] border-t-[#dddddd]"
      style={{
        backgroundColor: isDark ? '#13293D' : '#ffffff',
        color: isDark ? '#fff' : '#000',
      }}
    >
      <div className="flex flex-col lg:flex-row items-center gap-5 justify-between w-full">
        <div className="flex flex-col justify-start w-full lg:w-fit ">
          <h1 className="text-2xl font-bold ">TechStarHub 🌟</h1>
          <div className="mt-2">
            <span className=" hover:text-[#FD8D14] font-bold cursor-pointer">
              Learn
            </span>{' '}
            | {` `}
            <span className=" hover:text-[#FD8D14] font-bold cursor-pointer">
              Build
            </span>{' '}
            | {` `}
            <span className=" hover:text-[#FD8D14] font-bold cursor-pointer">
              Share
            </span>{' '}
            | {` `}
            <span className=" hover:text-[#FD8D14] font-bold cursor-pointer">
              Connect
            </span>
          </div>
          <p className="">Bijoy Kar © TechStarHub 2023</p>
        </div>
        <div className="flex gap-4 lg:gap-6 font-semibold justify-between w-full lg:w-fit">
          <div className="flex flex-col gap-3">
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="flex flex-col gap-3">
            <Link href="/blog">Blog</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/faq">FAQ</Link>
          </div>
          <div className="flex flex-col gap-3">
            <Link href="/resources">Resources</Link>
            <Link href="/github">GitHub</Link>
            <Link href="/copyright">Copyright</Link>
          </div>
        </div>
      </div>
      <hr className="w-full" />
      <div className="flex gap-4 justify-center lg:justify-end w-full ">
        <Link className=" " href="https://github.com/iamBijoyKar">
          <BsGithub className="text-2xl inline-block mr-2" />
          GitHub
        </Link>
        <Link href="https://www.linkedin.com/in/iambijoykar/">
          <BsLinkedin className="text-2xl inline-block mr-2" />
          LinkedIn
        </Link>
        <Link href="https://twitter.com/iamBijoyKar">
          <BsTwitter className="text-2xl inline-block  mr-2" />
          Twitter
        </Link>
      </div>
    </footer>
  );
}
