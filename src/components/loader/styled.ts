import styled, { keyframes } from 'styled-components'

export const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
  display: grid;
  justify-content: center;
  align-content: center;
  background: #ffffff;
`

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const Loader = styled.div`
  width: 80px;
  height: 80px;
  display: inline-block;
  &::after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #4452a8;
    border-color: #4452a8 transparent #4452a8 transparent;
    animation: ${spin} 1.2s linear infinite;
  }
`