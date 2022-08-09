import { createContext, ReactNode, useState } from 'react'

interface CreateCycleData {
  task: string
  minutesAmount: number
}

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interrupDate?: Date
  finishedDate?: Date
}

interface CyclesContextType {
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  markCurrentCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
  createNewCircle: (data: CreateCycleData) => void
  interruptCurrentCycle: () => void
  deactiveCurrentCycle: () => void
}

interface CyclesContextProps {
  children: ReactNode
}

export const CyclesContext = createContext({} as CyclesContextType)

export function CyclesContextProvider({ children }: CyclesContextProps) {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  function deactiveCurrentCycle() {
    setActiveCycleId(null)
  }

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  function createNewCircle(data: CreateCycleData) {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    setCycles((state) => [...state, newCycle])
    setActiveCycleId(id)
    setAmountSecondsPassed(0)
  }

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  function markCurrentCycleAsFinished() {
    setCycles((state) =>
      state.map((cycle: Cycle): Cycle => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishedDate: new Date() }
        }

        return cycle
      }),
    )
  }

  function interruptCurrentCycle() {
    setCycles((state) =>
      state.map((cycle: Cycle): Cycle => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interrupDate: new Date() }
        }

        return cycle
      }),
    )

    deactiveCurrentCycle()
  }

  return (
    <CyclesContext.Provider
      value={{
        activeCycle,
        markCurrentCycleAsFinished,
        activeCycleId,
        amountSecondsPassed,
        setSecondsPassed,
        createNewCircle,
        interruptCurrentCycle,
        deactiveCurrentCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
