"use client"
import React, { useState } from "react";
import { BiArrowBack as BackArrow } from "react-icons/bi";
import { AiFillSetting as Setting } from "react-icons/ai";
import { AiOutlineHome as Home } from "react-icons/ai";
import Link from "next/link";

interface SidebarProps {
  
  isSidebarShown: boolean;
}

const Sidebar = ({ isSidebarShown  }: SidebarProps) => {
  if (!isSidebarShown) {
    return null;
  }
  return (     
      <div className="bg-gradient-to-r from-[#10002B] to-[#300559] rounded-lg rounded-l-none rounded-b-none h-full ">
        <div className="flex flex-col justify-center items-center gap-5 p-4 ">
          <div className="font-white-300 text-gray-200 text-bold text-4xl  ">
            <button>
              <BackArrow />
            </button>
          </div>
          <Link href="/" className=" text-white text-bold text-4xl">
            <div className="">
              <Home />
            </div>
          </Link>
          <h1 className="text-gray-300">Home</h1>
          <Link href="/settings" className=" text-bold text-white text-4xl">
            <div className="">
              <Setting />
            </div>
          </Link>
          <h2 className="text-gray-300">Settings</h2>
        </div>
      </div>
    
  );
};

export default Sidebar;
