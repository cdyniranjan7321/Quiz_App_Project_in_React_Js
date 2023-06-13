"use client";
import React from "react";
import { FaBars } from "react-icons/fa";
import BackArrowButton from "./BackArrowButton";
type NavProps = {
  title: string;
  toggleMenu?: () => void;
  isSidebarShown?: boolean;
  isGeneralQuestionsPage?: boolean;
};
const Navbar = (props: NavProps) => {
  const { title, toggleMenu, isSidebarShown, isGeneralQuestionsPage } = props;
  return (
    <div className="bg-gradient-to-r from-[#C77DFF] to-[#000000] rounded-lg rounded-t-none">
      <div className="flex justify-between items-center gap-4">
        {!isSidebarShown && !isGeneralQuestionsPage && (
          <div className="ml-6 text-bold text-3xl text-white md:hidden">
            <FaBars onClick={toggleMenu} />
          </div>
        )}
        {isGeneralQuestionsPage && (
        <div className="ml-7">  
          <BackArrowButton />
        </div>
        )}
        <div className="flex-grow">
          <h1 className="text-center text-3xl lg:text-5xl p-3 font-bold text-white ">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
