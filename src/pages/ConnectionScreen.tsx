import React from 'react'
import { Container, styled } from '@mui/material';
import WifiOffIcon from '@mui/icons-material/WifiOff';
import { StyledConnectionContainer } from 'styles/others.style';

type Props = {}

const ConnectionScreen = (props: Props) => {
  return (
    <StyledConnectionContainer>
      <Container>
        <WifiOffIcon fontSize="large" />
        <div>Please check your network connection!</div>
      </Container>
    </StyledConnectionContainer>
  )
}

export default ConnectionScreen