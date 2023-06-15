'use client'
import React, { useState } from 'react' //The 'useState' hook is used to manage the state of the selected option.
import { BiArrowBack as BackArrow } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'

const MultipleChoice = () => {
  const [selectedOption, setSelectedOption] = useState(null)

  const handleOptionClick = (optionIndex: any) => {
    //The 'handleOptionClick' function is call when an option is clicked and updates the selected option state.
    setSelectedOption(optionIndex)
  }

  const isAnswerCorrect = (optionIndex: Number) => {
    //The 'isAnswerCorrect' function determines whether the selected option is coorect.You may need to replace this with your own logic.
    // Replace this with your answer correctness logic
    return optionIndex === 1 // Assuming option 1 is the correct answer
  }

  return (
    <div className='h-screen w-screen overflow-hidden flex bg-gray-900 bg-gradient-to-b from-gray-100 to-purple-800'>
      {' '}
      {/* The component starts with a div that covers the entire screen and has a gradient background. */}
      {/* starting navbar and main page where main component is wrapped in a flex container with a vertical column layout.*/}
      <div className='flex flex-col w-full'>
        {/* start navbar where navbar section is defined with a gradient background and contains a back arrow button, a tittle, and a close button. */}
        <div className='bg-gradient-to-br from-[#C77DFF] to-[#000000] h-14 w-full flex justify-between items-center'>
          <div className='text-white-300 text-gray-200 text-bold text-4xl'>
            <button className='self-start'>
              <BackArrow size={30} color='#FFFFFF' />
            </button>
          </div>

          <div className='flex justify-center items-center'>
            <span className='text-white font-bold text-4xl'>
              {' '}
              Multiple choice Round{' '}
            </span>
          </div>

          <div>
            <button>
              <AiOutlineClose size={30} color='#FFFFFF' />
            </button>
          </div>
        </div>
        {/* end navbar */}

        {/* starting main page */}
        <div className='flex flex-col md:flex-row h-full'>
          {/* starting first part */}
          <div className='md:w-[70%] md:ml-24 mt-8'>
            <div className='flex flex-row justify-between'>
              <div className='flex flex-col'>
                <span className='text-4xl p-4'>Multiple choice question</span>
                <span className='bg-gray-900 bg-gradient-to-b from-gray-700 to-purple-900 text-white p-2 rounded-lg text-xl my-3'>
                  Round for: Red house
                  <button className='ml-2 bg-red-500 w-10 h-6 rounded-xl py-2'></button>
                </span>
              </div>
            </div>
            <div className='text-5xl p-4'>Questions(1):</div>
            <div className='ml- flex justify-center'>
              <div className='text-5xl pt-11 left-0 pb-2 mr-16'>Answer:</div>
            </div>
            {/* Add the four options here  and Four buttons are displayed for the answer options. The button appearance depends on the selected option and */}
            <div className='ml-20 flex justify-center'>
              <div className='flex flex-col gap-4'>
                {/*Four buttons are display for the answer options. */}
                <div className='flex justify-center'>
                  <button
                    className={`option rounded-lg p-2 text-xl w-[10rem] h-16 ${
                      selectedOption === 0
                        ? isAnswerCorrect(selectedOption)
                          ? 'bg-[#B1DE76]'
                          : 'bg-[#FF0000]'
                        : 'bg-gray-200'
                    }`}
                    onClick={() => handleOptionClick(0)} //The 'handleOptionClick' function is called when an option button is clicked.
                  >
                    option 1
                  </button>
                  <div style={{ marginLeft: '2rem' }}></div>
                  <button
                    className={`option rounded-lg p-2 text-xl w-[10rem] h-16 ${
                      selectedOption === 1
                        ? isAnswerCorrect(selectedOption)
                          ? 'bg-[#B1DE76]'
                          : 'bg-[#FF0000]'
                        : 'bg-gray-200'
                    }`}
                    onClick={() => handleOptionClick(1)}
                  >
                    option 2
                  </button>
                </div>
                <div className='flex justify-center'>
                  <button
                    className={`option rounded-lg p-2 text-xl w-[10rem] h-16 ${
                      selectedOption === 2
                        ? isAnswerCorrect(selectedOption)
                          ? 'bg-[#B1DE76]'
                          : 'bg-[#FF0000]'
                        : 'bg-gray-200'
                    }`}
                    onClick={() => handleOptionClick(2)}
                  >
                    option 3
                  </button>
                  <div style={{ marginLeft: '2rem' }}></div>
                  <button
                    className={`option rounded-lg p-2 text-xl w-[10rem] h-16 ${
                      selectedOption === 3
                        ? isAnswerCorrect(selectedOption)
                          ? 'bg-[#B1DE76]'
                          : 'bg-[#FF0000]'
                        : 'bg-gray-200'
                    }`}
                    onClick={() => handleOptionClick(3)}
                  >
                    option 4
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* ending first part */}

          {/* starting second part Where second part of the main page contains the details for next question.*/}
          <div className='flex flex-col w-[30%] gap-12'>
            <div className='flex flex-col items-center bg-gray-900 bg-gradient-to-b from-gray-700 to-purple-900 text-white mt-4 mr-6 rounded-lg pl-3 py-4 md:ml-60'>
              <span className='font-italiana text-xl'>Next question for:</span>
              <span>
                Blue house{' '}
                <button className='ml-2 bg-blue-500 w-10 h-6 rounded-xl py-2'></button>
              </span>
            </div>
          </div>
          {/* ending second part */}
        </div>
        {/* ending main page */}
      </div>
      {/* ending navbar and main page */}
    </div>
  )
}

export default MultipleChoice
