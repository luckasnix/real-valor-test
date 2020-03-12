import React, { ReactNode } from 'react'
import { Header, Main } from './styled'

export default ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header>Real Valor</Header>
      <Main>{children}</Main>
    </>
  )
}