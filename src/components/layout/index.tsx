import React, { ReactNode } from 'react'
import { Header, Image, Main } from './styled'
import logo from '../../assets/images/logo.webp'

export default ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header>
        <Image src={logo} alt='Logo da Real Valor'/>
      </Header>
      <Main>{children}</Main>
    </>
  )
}