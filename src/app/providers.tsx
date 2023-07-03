'use client'
import { createContext, useState } from 'react'

interface TimerContextValues {
  timefirst: number
  timesecond: number
  timethird: number
  setTimefirst: (a: number) => void
  setTimesecond: (a: number) => void
  setTimethird: (a: number) => void
}

// export const TimerContext = createContext<TimerContextValues | undefined>()
export const TimerContext = createContext<TimerContextValues>(
  {} as TimerContextValues
)

const Providers = ({ children }: any) => {
  const [timefirst, setTimefirst] = useState(0)
  const [timesecond, setTimesecond] = useState(0)
  const [timethird, setTimethird] = useState(0)

  // const contextValue = useMemo(
  //   () => ({
  //     timefirst,
  //     timesecond,
  //     timethird,
  //   }),
  //   [timefirst, timesecond, timethird]
  // )

  return (
    <TimerContext.Provider
      value={{
        timefirst,
        timesecond,
        timethird,
        setTimefirst,
        setTimesecond,
        setTimethird,
      }}
    >
      {children}
    </TimerContext.Provider>
  )
}

export default Providers
