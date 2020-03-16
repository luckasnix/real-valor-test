import styled from 'styled-components'

export const Form = styled.form`
  width: 100%;
  height: calc(100vh - 80px);
  display: grid;
  justify-content: center;
  align-content: center;
  gap: 16px;
`

export const Label = styled.label`
  display: grid;
  gap: 8px;
  font-family: 'Baloo 2', cursive;
  font-size: 20px;
  color: #4452a8;
`

export const Input = styled.input`
  font-family: 'Baloo 2', cursive;
  font-size: 18px;
  color: #4452a8;
`

export const Small = styled.small`
  font-family: 'Baloo 2', cursive;
  font-size: 14px;
  color: #e74c3c;
`

export const Button = styled.button`
  padding: 8px 24px;
  background: #e08701;
  border: none;
  border-radius: 8px;
  font-family: 'Baloo 2', cursive;
  font-size: 20px;
  color: #ffffff;
  justify-self: center;
  cursor: pointer;
`