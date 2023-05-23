
import React from 'react'
import { StyledCircularProgressContainer } from './loading.style'
import { CircularProgress } from '@mui/material'

type Props = {
  size?: number 
}

const Loading = ({ size = 40 }: Props) => {
  
  return (
    <StyledCircularProgressContainer>
      <CircularProgress size={size} />
    </StyledCircularProgressContainer>
  )
}

export default Loading