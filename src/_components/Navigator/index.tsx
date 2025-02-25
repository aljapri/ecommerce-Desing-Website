"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { links } from "@/constant";
import { usePathname } from "next/navigation";
import { IoMenuSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import Logo from "../Logo";
// import { IoMenu } from "react-icons/io5";

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const path = usePathname();
  return (
    <header className="shadow-md font-sans tracking-wide relative z-50">
      <div className="flex flex-wrap items-center justify-between gap-4 px-10 py-4 bg-white min-h-[70px]">
       <Logo/>

        <div
          id="collapseMenu"
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50`}
        >
          <Button
            id="toggleClose"
            onClick={handleClick}
            variant="secondary"
            className="lg:hidden fixed top-2 right-4 z-[100] rounded-full"
          >
            <IoMdClose />
          </Button>

          <ul className="lg:flex lg:gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50" dir="rtl" >
            <li className="mb-6 hidden max-lg:block">
              <Logo/>
            </li>
            {links.map((item) => (
              <Link key={item.href} href={item.href} onClick={handleClick}>
                <li className="max-lg:border-b max-lg:py-3 px-3">
                  <span
                    className={`hover:text-[#007bff] block font-bold text-[15px] ${
                      item.href === path ? "text-[#007bff]" : "text-[#333]"
                    }`}
                  >
                    {item.name}
                  </span>
                </li>
              </Link>
            ))}
          </ul>
        </div>

        <div className="flex max-lg:ml-auto">
          <Button
            id="toggleOpen"
            onClick={handleClick}
            variant="secondary"
            className="lg:hidden"
          >
            <IoMenuSharp size={40} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
