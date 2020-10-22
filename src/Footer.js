import React from 'react'
import { DarkButton } from './Button'

export const Footer = ({ onToggle, theme }) => {
  return (
    <DarkButton
      onClick={onToggle}
    >
      {theme === 'dark' ? 'Light Theme' : 'Dark Theme'}
    </DarkButton>
  )
}
