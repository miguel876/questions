import React from 'react'
import { StyledButton } from './button.style'

const Button = ({...props}) => {
  return (
    <StyledButton {...props}/>
  )
}

export default Button