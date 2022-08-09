import { differenceInSeconds } from 'date-fns'
import { useContext, useEffect } from 'react'
import { CyclesContext } from '../../../../contexts/CyclesContext'
import { CountdownContainer, Separator } from './styles'

interface CountdownProps {
  deactiveCurrentCycle: () => void
}

export function Countdown({ deactiveCurrentCycle }: CountdownProps) {
  const {
    activeCycle,
    activeCycleId,
    markCurrentCycleAsFinished,
    amountSecondsPassed,
    setSecondsPassed,
  } = useContext(CyclesContext)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60
  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycleId) {
      document.title = `${minutes}:${seconds}`
    }
  }, [activeCycleId, minutes, seconds])

  useEffect(() => {
    let interval: number | undefined

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifferent = differenceInSeconds(
          new Date(),
          activeCycle.startDate,
        )

        if (secondsDifferent >= totalSeconds) {
          markCurrentCycleAsFinished()

          deactiveCurrentCycle()
          document.title = `00:00`
          clearInterval(interval)
        }

        setSecondsPassed(secondsDifferent)
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [
    activeCycle,
    totalSeconds,
    markCurrentCycleAsFinished,
    deactiveCurrentCycle,
    setSecondsPassed,
  ])

  return (
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  )
}
