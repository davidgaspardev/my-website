"use client";

import Link from "next/link";
import Image from "next/image";
import { links } from "../../helpers/data/links";
import { useEffect, useState } from "react";

export default function AppBar() {
  return (
    <header className="fixed flex flex-col top-4 items-center w-screen px-5 z-40">
      <div className="flex flex-row justify-between w-full max-w-[1000px] h-[50px] rounded-xl bg-gradient-to-r from-green-100 to-green-800 backdrop-blur-sm backdrop-saturate-200">
        <Logo />
        <Menu />
      </div>
    </header>
  );
}

function Logo() {
  return (
    <div className="w-[75px] h-[50px] children-center">
      <Link href="/">
        <Image
          src="/static/images/svg/logo.svg"
          width={35}
          height={35}
          alt="Logo icon"
        />
      </Link>
    </div>
  );
}

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasMenuContent, setHasMenuContent] = useState(false);

  useEffect(() => {
    if (isOpen === false) {
      setTimeout(() => setHasMenuContent(false), 250);
    } else {
      setHasMenuContent(true);
    }
  }, [isOpen]);

  return (
    <div className="w-[75px] h-[50px] children-center relative">
      <MenuButton onClick={() => setIsOpen(!isOpen)} />
      {hasMenuContent && (
        <MenuContent isOpen={isOpen} onClick={() => setIsOpen(false)} />
      )}
    </div>
  );
}

type MenuBusttonProps = {
  onClick: () => void;
};

function MenuButton(props: MenuBusttonProps) {
  const { onClick } = props;

  return (
    <div
      onClick={onClick}
      className="flex flex-col justify-between w-[22px] h-[16px] cursor-pointer"
    >
      <span className="w-full bg-white h-[2px] rounded-[1px]"></span>
      <span className="w-full bg-white h-[2px] rounded-[1px]"></span>
      <span className="w-full bg-white h-[2px] rounded-[1px]"></span>
    </div>
  );
}

type MenuContentProps = {
  isOpen: boolean;
  onClick: () => void; // to finish
};

function MenuContent(props: MenuContentProps) {
  const { isOpen, onClick } = props;
  const [show, setShow] = useState(false);

  useEffect(() => setShow(isOpen), [isOpen]);

  return (
    <nav
      className={`absolute right-0 w-[150px] z-30 bg-green-400 rounded-[4px] py-2 transition-all duration-200 ease-in ${
        show ? "top-[64px] opacity-100" : "top-[58px] opacity-0"
      }`}
    >
      {/** Arrow to top (position to outside) */}
      <div className="absolute top-[-8px] right-5 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-[#00403a]" />

      <ul>
        {links.map(({ path, name }, index) => (
          <li
            key={index}
            className="h-[40px] pl-2 flex flex-col justify-center ps-1 hover:bg-[#FFFFFF32]"
          >
            <Link
              href={`/${path}`}
              onClick={onClick}
              className="text-white font-poppins text-sm"
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
