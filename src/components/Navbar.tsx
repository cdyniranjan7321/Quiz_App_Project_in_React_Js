"use client";
import React, { useState, useEffect } from "react";
import { FaBars, FaBeer } from "react-icons/fa";
import { BiArrowBack as BackArrow } from "react-icons/bi";
import { AiFillSetting as Setting } from "react-icons/ai";
import { AiOutlineHome as Home } from "react-icons/ai";
import Link from "next/link";
type NavProps = {
  title: string;
  toggleMenu: () => void;
  isSidebarShown: boolean;
};
const Navbar = (props: NavProps) => {
  const { title, toggleMenu, isSidebarShown } = props;

  return (
    <div className="bg-gradient-to-r from-[#C77DFF] to-[#000000] rounded-lg rounded-t-none">
      <div className="flex justify-center items-center gap-4">
        {!isSidebarShown && (
          <div className="absolute left-2 text-bold text-3xl text-white md:hidden">
            <FaBars onClick={toggleMenu} />
          </div>
        )}

        <div className="">
          <h1 className="text-3xl lg:text-5xl p-3 font-bold text-white ">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
