import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: transparent;
  border: 4px solid white;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  margin: 8px;
  outline: none;
  padding: 16px

`


export const Button = ({ children, buttonColor, ...props }) => {
  return (
    <StyledButton buttonColor={buttonColor} {...props}>{children}</StyledButton>
  )
}
