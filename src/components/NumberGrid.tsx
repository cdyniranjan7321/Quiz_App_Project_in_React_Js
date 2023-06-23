import { useRouter } from 'next/navigation'
import { useState } from 'react'
import CloseIconButton from './CloseIconButton'

type NumberGridProps = {
  grid: number[][]
  roundId: number
  roundName: string | null
}
const NumberGrid = (props: NumberGridProps) => {
  const { grid, roundId, roundName } = props
  const [clickedButtons, setClickedButtons] = useState<number[]>([])
  console.log(' roundId : ', roundId)

  const router = useRouter()

  const handleQuestionNumberClick = (number: number) => {
    if (roundId !== null && roundName !== null) {
      router.push(
        `/${roundName}Question?questionNumber=${number}&roundId=${roundId}`
      )
    }
  }
  return (
    <div className='flex flex-col gap-4 lg:gap-6 ml-0 mt-4 w-full mb-4 lg:mb-10'>
      {grid.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className='flex flex-row justify-between md:justify-start gap-3 md:gap-4'
        >
          {row.map((number) => (
            <div key={number} className='relative flex items-center'>
              {clickedButtons.includes(number) && (
                <div className=' absolute z-50 pt-3'>
                  <CloseIconButton />
                </div>
              )}
              <div className='relative z-20 pl-2'>
                <button
                  className={`px-2 mr-2 rounded-2xl rounded-bl-none w-18 md:w-20 text-6xl font-sansi font-semibold italic border-2 border-black ${
                    clickedButtons.includes(number)
                      ? ' bg-gray-500 text-black'
                      : 'bg-blue-600  text-white'
                  }`}
                  onClick={() => handleQuestionNumberClick(number)}
                >
                  {number}
                </button>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
export default NumberGrid
