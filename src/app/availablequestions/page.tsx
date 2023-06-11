import React, { useState } from "react";
import { BiArrowBack as BackArrow } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";

const AvailableQuestions = () => {
  const totalQuestions = 40; //Total number of questions
  const numRows = 5;
  //this number determines how many rows are shown
  const numCols = 10;
  //this number determines how many columns are shown

  // Generate the grid of numbers
  const grid = [];
  let count = 1;
  for (let i = 0; i < numRows; i++) {
    const row = [];
    for (let j = 0; j < numCols; j++) {
      if (count <= totalQuestions) {
        row.push(count++);
      } else {
        break;
      }
    }
    grid.push(row);
  }

  return (
    // starting whole page
    <div className="h-screen w-screen overflow-hidden flex bg-blue-gray-900 bg-gradient-to-b from-gray-100 to-purple-900">
      {/* start sidebar */}
      <div className="w-14 bg-gradient-to-r from-[#10002B] to-[#300559] flex flex-col justify-start items-start">
        <div className="flex flex-col justify-center items-center gap-5 p-3">
          <div className="font-white-300 text-gray-200 text-bold text-4xl">
            <button className="self-start">
              <BackArrow />
            </button>
          </div>
        </div>
      </div>

      {/* ending sidebar */}
      {/* starting navbar and main page  */}
      <div className="flex flex-col w-full">
        {/* start navbar */}
        <div className=" bg-gradient-to-br from-[#C77DFF] to-[#000000] h-14 w-full">
          <div className="flex justify-center items-center gap-4"></div>
        </div>
        {/* end navbar */}
        {/* starting main page  */}
        <div className="flex flex-row h-full">
          {/* starting first part  */}
          <div className="w-[70%] ml-24 mt-8 ">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col">
                <span className="text-4xl p-4">General round</span>
                <span className="bg-gray-900 bg-gradient-to-b from-gray-700 to-purple-900 text-white p-2 rounded-lg text-xl my-3">
                  Round for: Red house{" "}
                  <button className="ml-2 bg-red-500 w-10 h-6 rounded-xl py-2"></button>
                </span>
              </div>
            </div>
            <div className=" text-5xl p-4 ">Available Questions:</div>
            <NumberGrid grid={grid} />
          </div>
          {/* ending first part  */}
          {/* starting second part  */}
          <div className="flex flex-col w-[30%] gap-12  ">

            {/* top part of right side */}
            <div className="flex flex-col items-center bg-gray-900 bg-gradient-to-t from-gray-400 to-purple-900 text-white mt-4 mr-8 rounded-lg pl-3 pr-2 py-4 ml-auto">
              <span className="font-italiana text-xl">Next question for:</span>
              <span>
                Blue house{" "}
                <button className="ml-2 bg-blue-500 w-10 h-6 rounded-xl py-2"></button>
              </span>
            </div>
            {/* end of top part of right side */}
            <div className="left-32 lightbulbside relative">
              <Image
                src="/images/file1.svg"
                alt="some filings"
                width={400}
                height={400}
                className="mx-0 w-full max-h-96 left-4"
              />
            </div>
          </div>
        </div>
        {/* ending main page */}
      </div>
      {/* ending navbar and main page  */}
    </div>
  );
};

type NumberGridProps = {
  grid: number[][];
};

const NumberGrid = ({ grid }: NumberGridProps) => {
  return (
    <div className="flex flex-col gap-4 lg:gap-8 ml-0 mt-4 w-full mb-10">
      {grid.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="flex flex-row justify-start gap-3 md:gap-6 "
        >
          {row.map((number) => (
            <button
              key={number}
              className="bg-blue-600 px-2 mr-2 rounded-2xl rounded-bl-none w-16 lg:w-28 md:w-24 text-6xl font-sansi font-semibold italic text-white border-2 border-black"
            >
              {number}
            </button>
          ))}
        </div>
      ))}
    </div>
    // ending whole page
  );
};

export default AvailableQuestions;
