"use client";
import Image from "next/image";
import React, { useState } from "react";

const LandingPage = () => {
  return (
    <div
      className="relative bg-gray-900 w-screen flex flex-col items-stretch"
      style={{
        background: "linear-gradient(180deg, #D9D9D9 -3.9%, #3C096C 79.98%)",
      }}
    >
      {/* this line css is for the whole page */}

      <header className="header flex flex-row items-center justify-between px-20 py-6">
        <div className="branding">
          <h1
            className="text-5xl font-sans text-black font-thin"
            style={{ fontFamily: "Italiana" }}
          >
            Quiz
          </h1>
        </div>
        <nav className="navigation flex items-center">
          <div
            className="ml-8 font-sans font-medium text-2xl text-white bg-black px-2 pb-1 rounded-lg"
            style={{ fontFamily: "Work sans" }}
          >
            Quiz App
          </div>
          <div className="bg-white ml-12 px-4 py-1 font-sans font-medium text-2xl text-blue-800 rounded-lg">
            Login
          </div>
          <div className="bg-white ml-4 px-4 py-1 font-sans font-medium text-2xl text-blue-800 rounded-lg">
            Register
          </div>
        </nav>
      </header>
      {/* header part ends */}
      <section className="secondsection flex items-center justify-between gap-4 flex-grow h-auto">
        {/* this line css is for the whole second section  */}
        
        <div
          className=" w-[40%] bg-gray-700 bg-opacity-60 shadow-md rounded-lg "
          style={{ backdropFilter: "blur(24px)" }}
        >
          {/* this div is for the second section first part of ractangle that is stretched to outside of viewport and at 80 or 90 % of the left side rectangle is included   */}
          
          <div
            className="absolute bg-purple-400 bg-opacity-60 w-[30%] z-10"
            style={{ filter: "blur(150px)" }}
          >
            {/* this div will be near left edge which will have some shadow  */}
          </div>
            {/* this div closes the div with shadow */}
          
          <div
            className="flex bg-purple-700 bg-opacity-20 shadow-md rounded-2xl ml-12 z-30"
            style={{ backdropFilter: "blur(24px)" }}
          >
            {/* this div is for the rectangle that encases left and right side two boxes left box is empty right box is words which will be made after this css */}
            <div className="w-2/5 ">
              {/* this css is for the first left side which is blank  */}
            </div>
            {/* this div finish is blank and at left side which is from line 14 */}
            <div className="text-justify left-7 w-3/5 mr-4 pb-6 pt-3">
              {/* this css will encase the word which is in right side */}
              <h2 className="text-3xl font-bold  mb-4 text-white">Quiz App</h2>
              <p className=" text-white text-left ">
                Embark on the Ultimate Quiz Experience. <br />
                Test your knowledge, challenge your intellect, and become a hero
                of trivia. <br />
                With captivating quizzes, achievements, and global competition,
                our website is your gateway to endless learning and excitement.
                <br />
                Join us now and redefine what it means to be a knowledge hero!
              </p>
              <div className="mt-6">
                <button className="button bg-indigo-900 text-white rounded-lg px-2 py-1 mb-2">
                  Get Started
                </button>
              </div>
            </div>
            {/* this div finishes the line word is there*/}
          </div>
          {/* this div encloses two div inside one is blank one is words */}
        </div>
        {/* this div is for the part of left side which has shadow and which stretches out of viewport */}

        <div className="w-[60%] relative flex items-center">
          {/* Wrapper div for the parent container */}
          <div
            className="z-20"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "60%", // Adjust the width of the middle part as desired
              height: "60%", // Adjust the height of the middle part as desired
              background: "rgba(200, 107, 250, 0.69)",
              filter: "blur(100px)",
              borderRadius: "50%",
            }}
          ></div>
          <div className="w-full">
            {/* Encasing div for the light bulb */}
            <div className="middle-part relative">
              <div className="lightbulbside relative z-30">
                <Image
                  src="/images/lightbulb.svg"
                  alt="Light Bulb"
                  width={400}
                  height={400}
                  className="mx-auto max-h-96"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* this line closes the whole second section */}

      <section className="thirdsection flex items-center justify-between gap-4 flex-grow mt-20 mb-14">
        {/* this line css is for the whole third section  */}
        <div className="w-[60%] relative flex items-center">
          {/* Wrapper div for the parent container */}
          <div
            className="z-20"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "70%", // Adjust the width of the middle part as desired
              height: "60%", // Adjust the height of the middle part as desired
              background: "#6E6BFA",
              filter: "blur(100px)",
              borderRadius: "50%",
            }}
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
        {/* this has become thirdsection first part  now next will be second part*/}
        <div
          className=" w-[30%] bg-gray-700 bg-opacity-60 shadow-md rounded-lg "
          style={{ backdropFilter: "blur(24px)" }}
        >
          {/* this div is 40% which is the word side full part of w-screen */}

          <div
            className="flex bg-purple-700 bg-opacity-20 shadow-md rounded-2xl mr-12 w-[80%] py-16 px-20 items-center "
            style={{ backdropFilter: "blur(24px)" }}
          >
            {/* this div is for the rectangle that encases  box is words which will be made after this css */}

            <div className="  right-10 mx-12">
              {/* this css will encase the word which is in right side */}
              <h2 className="text-center mb-4 font-normal leading-35 text-green-100">
                Know About Us
              </h2>
              <p className=" text-white text-left ">
                this section shows the general information about the web page we
                are concerned with
              </p>
              <div className="mt-6">
                <button className="button bg-indigo-900  text-white rounded-lg px-3 py-1 mb-2">
                  About us
                </button>
              </div>
            </div>
            {/* this div finishes the line word is there*/}
          </div>
          {/* this div encloses two div inside one is blank one is words */}
          {/* this div is for the third section first part of ractangle that is stretched to outside of viewport and at 80 or 90 % of the left side rectangle is included   */}

          <div
            className="absolute bg-purple-400 bg-opacity-60 w-[30%]"
            style={{ filter: "blur(150px)" }}
          >
            {/* this div will be near right edge which will have some shadow  */}
          </div>
          {/* closing of edge toucher */}

          {/* this div is for the part of right side which stretches out of viewport */}
        </div>
      </section>
      {/* this line closes the whole third section */}
    </div>
  );
};

export default LandingPage;
