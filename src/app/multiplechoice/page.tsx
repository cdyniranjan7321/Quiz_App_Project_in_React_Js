import React from 'react';
import { BiArrowBack as BackArrow } from "react-icons/bi";
import { AiOutlineClose } from 'react-icons/ai';

const MultipleChoice = () => {
  const isAnswerCorrect = true; // Replace with your answer correctness logic

  return (
    <div className="h-screen w-screen overflow-hidden flex bg-gray-900 bg-gradient-to-b from-gray-100 to-purple-800">
      {/* starting navbar and main page */}
      <div className="flex flex-col w-full">
        {/* start navbar */}
        <div className="bg-gradient-to-br from-[#C77DFF] to-[#000000] h-14 w-full flex justify-between items-center">
          <div className="text-white-300 text-gray-200 text-bold text-4xl">
            <button className="self-start">
              <BackArrow size={30} color="#FFFFFF" />
            </button>
          </div>
          <div className="flex justify-center items-center">
            <span className="text-white font-bold text-4xl">Multiple choice Round</span>
          </div>
          <div>
            <button>
              <AiOutlineClose size={30} color="#FFFFFF" />
            </button>
          </div>
        </div>
        {/* end navbar */}

        {/* starting main page */}
        <div className="flex flex-col md:flex-row h-full">
          {/* starting first part */}
          <div className="md:w-[70%] md:ml-24 mt-8">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col">
                <span className="text-4xl p-4">Multiple choice question</span>
                <span className="bg-gray-900 bg-gradient-to-b from-gray-700 to-purple-900 text-white p-2 rounded-lg text-xl my-3">
                  Round for: Red house
                  <button className="ml-2 bg-red-500 w-10 h-6 rounded-xl py-2"></button>
                </span>
              </div>
            </div>
            <div className="text-5xl p-4">Questions(1):</div>
            <div className="ml- flex justify-center">
              <div className="text-5xl pt-11 left-0 pb-2 mr-16">Answer:</div>
            </div>
            {/* Add the four options here */}
            <div className="ml-20 flex justify-center">
              <div className="flex flex-col gap-4">
                <div className="flex justify-center">
                  <button
                    className={`option rounded-lg p-2 text-xl w-[10rem] h-16 ${
                      isAnswerCorrect ? "bg-[#B1DE76]" : "bg-gray-200"
                    }`}
                  >
                    option 1
                  </button>
                  <button className="option rounded-lg bg-gray-200 p-2 text-xl w-[10rem] h-16 ml-6" style={{ background: "#D9D9D9" }}>
                    option 2
                  </button>
                </div>
                <div className="flex justify-center">
                  <button className="option rounded-lg bg-gray-200 p-2 text-xl w-[10rem] h-16" style={{ background: "#D9D9D9" }}>
                    option 3
                  </button>
                  <button className="option rounded-lg bg-gray-200 p-2 text-xl w-[10rem] h-16 ml-6" style={{ background: "#D9D9D9" }}>
                    option 4
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* ending first part */}

          {/* starting second part */}
          <div className="flex flex-col w-[30%] gap-12">
            <div className="flex flex-col items-center bg-gray-900 bg-gradient-to-b from-gray-700 to-purple-900 text-white mt-4 mr-6 rounded-lg pl-3 py-4 md:ml-60">
              <span className="font-italiana text-xl">Next question for:</span>
              <span>Blue house <button className="ml-2 bg-blue-500 w-10 h-6 rounded-xl py-2"></button></span>
            </div>
          </div>
          {/* ending second part */}
        </div>
        {/* ending main page */}
      </div>
      {/* ending navbar and main page */}
    </div>
  );
};

export default MultipleChoice;
