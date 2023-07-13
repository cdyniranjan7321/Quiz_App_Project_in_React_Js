import useSWR from 'swr'
import Loading from '@/app/loading'
import { RoundI } from '../types'

const useRound = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json())

  const url = 'http://localhost:3000/api/getRounds'

  const { data: rounds, isLoading, error } = useSWR(url, fetcher)

  if (error) return <div>Failed to load data</div>
  else if (isLoading) {
    return <Loading />
  } else {
    console.log('rounds from useSWR : ', rounds)
    return rounds
  }
}

export default useRound
