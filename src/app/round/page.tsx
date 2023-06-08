"use client";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import React,{useState,useEffect,useRef} from "react";
const Round = () => {
  
  
  const [isSidebarShown,setIsSidebarShown]=useState(true);
  // this is used to have boolean value true for issidebarshown when false the sidebar gets hidden when true the sidebar is shown
  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsSidebarShown(!isSidebarShown);  
    // this function changes the value of issidebarshown
  };
  useEffect(() => {
    const handleClickOutside = (event:MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsSidebarShown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setIsSidebarShown(false);
        //this makes the sidebar hidden
      } else {
        setIsSidebarShown(true);
      }
    };

    // Attach the event listener on component mount
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  return (
    
    <div className="h-screen w-screen z-0 ">
      {/* this is to make the div have full screen as the page */}
      <div className="absolute left-0 top-0 z-20 w-full">
         {/* this makes from left side 0 and from top side 0 with absolute */}
        <Navbar title="Select Round" toggleMenu={toggleMenu} isSidebarShown={isSidebarShown}/>
      </div>
      <div ref={sidebarRef} className="absolute left-0 top-0 z-30 h-full">
        <Sidebar  isSidebarShown={isSidebarShown} />
      </div>
      <div className="absolute top-0 left-0 z-10 w-full h-full bg-gradient-to-b from-[#EED8FF] to-[#3E0C6E]">
        {/* this makes the item have full width and height as its container */}
        <div className="flex flex-row justify-around align-items-center pt-[12%] md:pl-[12%]">
          <div className="flex-col justify-content:center align-items:center pt-11">
            <div className="bg-white rounded-md mt-6 pl-2 text-bold text-2xl h-9 w-[80%]">
              <button>General Round</button>
            </div>
            <div className="bg-white rounded-md pl-2 mt-6 text-2xl pt- h-15 w-[60%]">
              <button>Rapid Fire</button>
            </div>
            <div className="bg-white rounded-md pl-1 mt-7 pt-1 text-2xl h-10 w-[90%]">
              <button>Multiple Question</button>
            </div>
            <div className="bg-white rounded-md pl-2 mt-5 text-2xl h-9 w-[100%] pr-2">
              <button>General Knowledge</button>
            </div>
          </div>
          <div className=" hidden md:block">
            <Image
              height="400"
              width="400"
              src="/images/computer1.svg"
              alt="comp"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Round;
