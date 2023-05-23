import { styled, IconButton } from "@mui/material";

export const StyledBackBtn = styled(IconButton)({
    marginTop: 10,
    marginBottom: 10
})

export const StyledConnectionContainer = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
    '& .MuiContainer-root': {
      textAlign: 'center'
    }
  }))

  export const InfiniteLoadingContainer = styled('div')({
    width: '100%',
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 20
})