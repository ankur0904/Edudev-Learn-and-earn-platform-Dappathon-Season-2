import { useState } from "react";
import Image from "next/image"
import { Link } from 'react-scroll';
import { Web3Button } from '@web3modal/react';
import LogoutButton from '../../LogoutButton';
import ToggleAppearance from "../../ToggleAppearance";
import Logo from '../../../public/assets/logo.svg'



function NavLink({ to, children }) {
  return (
    <a href={to} className={`mx-4`}>
      {children}
    </a>
  );
}

function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out bg-gray filter drop-shadow-md `}
    >
      <div className="flex items-center justify-center filter drop-shadow-md bg-gray h-20">
        {/* logo container */}
        <a className="styles.logo text-xl font-semibold" href="/">
          OS.Dev
        </a>
      </div>
      <div className="flex flex-col ml-4">
        <a
          className="text-xl font-medium my-4"
          href="/"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          About
        </a>
        <a
          className="text-xl font-normal my-4"
          href="/"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Resources
        </a>
        <a
          className="text-xl font-normal my-4"
          href="/"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Blog
        </a>
        <a
          className="text-xl font-normal my-4"
          href="/"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Communities
        </a>
        <a
          className="text-xl font-normal my-4"
          href="/"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            LOGIN
          </button>
        </a>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex sticky Navbar top-0 z-10 filter drop-shadow-2xl bg-white px-4 py-4 h-20 items-center ">
      <MobileNav open={open} setOpen={setOpen} />
      <div className="w-3/12 flex items-center">
        <a className="text-4xl tracking-widest font-semibold" href="/">
          {" "}
          <h2>
            <span className="text-blue-800">EDU.D</span>ev
          </h2>
        </a>
      </div>

      <div className="hidden md:flex text-9010FF text-1xl nav-item font-semibold font-serif ml-4 w-9/12 justify-end items-center ">
        <NavLink to="/about-us">ABOUT US</NavLink>
        <NavLink to="/resources">RESOURCES</NavLink>
        <NavLink to="/blog">BLOG</NavLink>
        <NavLink to="/communities">COMMUNITIES</NavLink>
      </div>
      <div className="w-9/12 flex justify-end items-center">
      <Web3Button balance="show" icon="hide" label="Connect Wallet" />

        <div
          className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-3.5" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-3.5" : ""
            }`}
          />
        </div>
      </div>
    </nav>
  );
}
