import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Wrapper = styled.section`
  width: 100%;
  height: calc(100vh - 80px);
  display: grid;
  justify-content: center;
  align-content: center;
  gap: 32px;
`

export const Title = styled.h1`
  font-family: 'Baloo 2', cursive;
  font-size: 24px;
  text-align: center;
  color: #4452a8;
`

export const List = styled.ul`
  display: grid;
  grid-auto-flow: column;
  gap: 32px;
`

export const Item = styled.li`
  width: 120px;
  height: 120px;
  padding: 16px;
  border: 4px solid #e08701;
  border-radius: 16px;
`

export const Link = styled(NavLink)``