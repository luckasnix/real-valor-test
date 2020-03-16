import React, { useReducer, ReactNode } from 'react'
import Context from './context'
import reducer from './reducer'

const initialState: any = []

export default ({ children }: { children: ReactNode }) => {
  const [data, dispatchToData] = useReducer(reducer, initialState)
  return (
    <Context.Provider value={{ data, dispatchToData }}>
      {children}
    </Context.Provider>
  )
}