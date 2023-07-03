import useSWR from 'swr'
import Loading from '@/app/loading'

const useRequest = (questionNum: number, roundId: number) => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json())

  const url = `http://localhost:3000/api/getQuestion?questionNumber=${questionNum}&roundId=${roundId}`
  const { data: question, error, isLoading } = useSWR(url, fetcher)

  if (error) return <div>failed to load</div>
  if (isLoading) return <Loading />
  console.log('data from useRquest fetcher : ', question?.question)

  return question
}

export default useRequest
