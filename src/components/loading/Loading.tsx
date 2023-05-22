
import React from 'react'
import { StyledCircularProgress, StyledCircularProgressContainer } from './loading.style'

type Props = {}

const Loading = (props: Props) => {
  return (
    <StyledCircularProgressContainer>
      <StyledCircularProgress />
    </StyledCircularProgressContainer>
  )
}

export default Loading