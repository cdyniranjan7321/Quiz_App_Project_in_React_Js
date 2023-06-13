"use client";
import Image from "next/image";
import React, { useState } from "react";
import Footer from "./Footer";
import Link from "next/link";
const LandingPage = () => {
  return (
    <div //  i will place this color in the code later
      className="relative  w-screen flex flex-col bg-gray-900 items-stretch bg-gradient-to-b from-gray-300 to-purple-900  overflow-visible overflow-x-hidden"
    >
      {/* this line css is for the whole page */}
      <header className="header flex flex-row items-center justify-between px-8 py-4">
        <div className="branding">
          <h1 className="text-3xl md:text-4xl lg:text-6xl text-blue-800 md:text-black font-italiana font-thin ">
            Quiz
          </h1>
        </div>
        <nav className="navigation flex items-center">
          <div className="hidden md:block font-work font-medium text-2xl text-white bg-black px-2 pb-1 rounded-lg mr-12">
            Quiz App
          </div>
          <Link
            href="/login"
            className="px-4 py-1 font-medium text-2xl font-work md:font-sans text-blue-800 md:text-custom-Purple2 rounded-lg bg-transparent md:bg-white relative"
          >
            <div className="flex flex-col">
              <span className="pb-2 pl-2 md:pl-0">Login</span>
              <span className="left-0 bottom-0 w-20  h-1 bg-custom-Purplee md:hidden"></span>
            </div>
          </Link>
          <Link
            href="/register"
            className="  px-4 py-1 ml-4  font-work md:font-sans font-medium text-2xl  text-blue-800 md:text-custom-Purple2 rounded-lg bg-transparent md:bg-white relative"
          >
            <div className="flex flex-col">
              <span className="pb-2 pl-4 md:pl-0">Register</span>
              <span className="left-0 bottom-0 w-28  h-1 bg-custom-Purplee md:hidden"></span>
            </div>
          </Link>
        </nav>
      </header>
      {/* header part ends */}
      <section className="secondsection flex items-center justify-between gap-4 flex-grow h-auto mt-10 lg:gap-16">
        {/* this line css is for the whole second section  */}
        <div className=" w-[50%] lg:w-[40%] bg-gray-700 bg-opacity-50 shadow-md rounded-3xl rounded-l-none backdrop-blur-xl">
          {/* this div is for the second section first part of ractangle that is stretched to outside of viewport and at 80 or 90 % of the left side rectangle is included   */}
          <div className="flex bg-custom-Blackis bg-opacity-20 shadow-md rounded-3xl  z-30 backdrop-blur-xl ml-3 lg:ml-10">
            {/* this div is for the rectangle that encases left and right side two boxes left box is empty right box is words which will be made after this css */}
            {/* this div finish is blank and at left side which is from line 14 */}
            <div className="text-center md:text-left bg-opacity-20 mr-2 lg:ml-20 lg:mr-1 pb-4 pt-3 px-6 lg:px-4">
              {/* this css will encase the word which is in right side */}
              <h2 className="text-xl lg:text-2xl font-bold  mb-4 text-white">
                Quiz App
              </h2>
              <p className=" text-white text-center md:text-left text-xs lg:text-lg">
                Embark on the Ultimate Quiz Experience. <br />
                Test your knowledge, challenge your intellect, and become a hero
                of trivia. <br />
                With captivating quizzes, achievements, and global competition,
                our website is your gateway to endless learning and excitement.
                <br />
                Join us now and redefine what it means to be a knowledge hero!
              </p>
              <div className="mt-6">
                <Link
                  href="/round"
                  className="button bg-indigo-900 text-white rounded-lg px-2 py-1 mb-2 text-sm md:text-base lg:text-lg"
                >
                  Get Started
                </Link>
              </div>
            </div>
            {/* this div finishes the line word is there*/}
          </div>
          {/* this div encloses two div inside one is blank one is words */}
        </div>
        {/* this div is for the part of left side which has shadow and which stretches out of viewport */}
        <div className="w-[55%] lg:w-[70%] h-auto relative flex items-center">
          {/* Wrapper div for the parent container */}
          <div className="z-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100%] lg:w-[70%]  h-[80%] lg:h-[100%] bg-custom-Indigo lg:bg-opacity-[45%] blur-2xl rounded-full "></div>
          <div className="w-full">
            {/* Encasing div for the light bulb */}
            <div className="middle-part relative">
              <div className="lightbulbside relative z-30">
                <Image
                  src="/images/lightbulb.svg"
                  alt="Light Bulb"
                  width={400}
                  height={400}
                  className="mx-0 w-full max-h-96 left-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* this line closes the whole second section */}
      <section className="thirdsection flex items-center justify-between gap-4 flex-grow mt-20 mb-14">
        {/* this line css is for the whole third section  */}
        <div className="w-[50%] lg:[70%] relative flex items-center">
          {/* Wrapper div for the parent container */}
          <div
            className="z-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%] h-[60%] bg-custom-Blue bg-opacity-69 blur-4xl rounded-full"
            // use this for styling background shadow part of bulb or connect
          ></div>
          <div className="w-full">
            {/* Encasing div for the light bulb */}
            <div className="middle-part relative">
              <div className="Connect relative z-30">
                <Image
                  src="/images/connect.svg"
                  alt="Connect"
                  width={400}
                  height={400}
                  className="mx-auto max-h-96"
                />
              </div>
            </div>
          </div>
        </div>
        {/* this closes thirdsection first part  now next will be second part*/}
        <div className=" w-[50%] md:w-[40%] lg:w-[30%] bg-gray-700 bg-opacity-20 shadow-md rounded-3xl rounded-r-none backdrop-blur-xl">
          {/* this div is 50% which is the word side full part of w-screen */}
          <div className="flex bg-custom-Blackis bg-opacity-30 shadow-md rounded-3xl mr-4 md:mr-4 lg:mr-14 py-4 px-4 items-center backdrop-blur-xl">
            {/* this div is for the rectangle that encases  box with words which will be made after this css */}
            <div className=" text-xs ">
              {/* this css will encase the word which is in right side */}
              <h2 className=" text-center gap-3 mb-4 font-normal text-xl lg:text-2xl leading-35 text-green-100">
                <span className="hidden md:inline-block lg:inline-block">
                  Know
                </span>
                <span className="md:ml-2">About Us</span>
              </h2>
              <p className=" text-white text-left px-2 lg:text-lg">
                this section shows the general information about the web page we
                are concerned with
              </p>
              <div className="mt-6">
                <button className="button bg-indigo-900 bg-opacity-80 text-xl lg:text-lg  text-white rounded-lg px-3 py-1 mb-2">
                  About us
                </button>
              </div>
            </div>
            {/* this div finishes the line word is there*/}
          </div>
          {/* this div encloses two div inside one is blank one is words */}
          {/* closing of edge toucher */}
          {/* this div is for the part of right side which stretches out of viewport */}
        </div>
      </section>
      {/* this line closes the whole third section */}
      <Footer />
    </div>
  );
};

export default LandingPage;
