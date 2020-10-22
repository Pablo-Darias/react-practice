import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding-right: 40px
`

const StyledLink = styled(Link)`
  text-decoration: none;
`

export const Navbar = () => {
  return (
    <StyledList>
      <li>
        <StyledLink to="/">Home</StyledLink>
      </li>
      <li>
        <StyledLink to="/counter">Counter Button</StyledLink>
      </li>
      <li>
        <StyledLink to="/people-list">People List</StyledLink>
      </li>
      <li>
        <StyledLink to="/forms">Forms</StyledLink>
      </li>
      <li>
        <StyledLink to="/user">User Profile</StyledLink>
      </li>
    </StyledList>
  )
}
