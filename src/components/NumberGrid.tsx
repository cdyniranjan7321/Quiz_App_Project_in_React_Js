import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import CloseIconButton from './CloseIconButton'
import useSWRInfinite from 'swr/infinite'
import { mutate } from 'swr'

type NumberGridProps = {
  grid: number[][]
  roundId: number
  roundName: string | null
  totalQuestions: number
}
const NumberGrid = (props: NumberGridProps) => {
  const { grid, roundId, roundName, totalQuestions } = props
  const [clickedButtons, setClickedButtons] = useState<number[]>([])
  const router = useRouter()
  // const [questionNum, setQuestionNum] = useState(1)

  // const { question } = useRequest(1, roundId)

  /* ------------- useSWRInfinite ------------ */
  const initialSize = totalQuestions
  const fetcher = (url: string) => fetch(url).then((res) => res.json())
  const getKey = (
    pageIndex: number,
    previousPageData: any,
    roundId: number
  ) => {
    // Determine the questionNumber based on the current pageIndex
    const questionNumber = pageIndex + 1

    // Fetch the data for the current questionNumber
    return `/api/getQuestion?questionNumber=${questionNumber}&roundId=${roundId}`
  }

  const { data, error } = useSWRInfinite(
    (pageIndex, previousPageData) =>
      getKey(pageIndex, previousPageData, roundId),
    fetcher,
    {
      initialSize: initialSize,
    }
  )

  const refreshData = async () => {
    for (let i = 1; i <= initialSize; i++) {
      // Trigger data refresh for each question number
      const cacheKey = getKey(i - 1, null, roundId)
      const newData = await fetcher(cacheKey)
      mutate(cacheKey, newData, false)
    }

    // Generate an array of cache keys for all question numbers
    const cacheKeys = Array.from({ length: initialSize }, (_, index) =>
      getKey(index, null, roundId)
    )

    // Trigger a re-render after updating all question numbers
    mutate(cacheKeys)
  }

  useEffect(() => {
    const refreshInterval = setInterval(() => {
      // Trigger data refresh for all question numbers
      refreshData()
    }, 500) // Refresh interval in milliseconds (e.g., 5000ms = 5 seconds)

    return () => {
      clearInterval(refreshInterval)
    }
  })

  if (error) {
    return <div>Error: {error.message}</div>
  }
  if (!data) {
    return <div>Loading...</div>
  }
  // Flatten the data array
  const allData = data.flat()
  /* ------------- upto here useSWRInfinite ------------ */

  const handleQuestionNumberClick = async (number: number) => {
    if (roundId !== null && roundName !== null) {
      await fetch(
        `http://localhost:3000/api/updateQuestion?questionNumber=${number}&roundId=${roundId}`,
        {
          method: 'PATCH',
        }
      )
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
              {allData.map((item) => (
                <div key={item.id} className=' absolute z-50 pt-3'>
                  {' '}
                  {console.log('item : ', item)}
                  {item.question?.isAsked && item.question?.id === number && (
                    <CloseIconButton />
                  )}
                </div>
              ))}
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
