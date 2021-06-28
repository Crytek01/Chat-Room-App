import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 5fr 1fr;
  padding: 5px;
  gap: 5px;
`

export const Input = styled.input`
  border: 1px solid;
  border-radius: 21px;
  padding: 10px;
  outline: 0;
  font-size: 1em;

  -webkit-appearance: none;
`

export const Button = styled.button`
  border: 1px solid transparent;
  border-radius: 21px;
  background: #652af5;
  font-size: 1em;
  color: white;
`
