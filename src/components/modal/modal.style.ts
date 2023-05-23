import { Modal, styled } from "@mui/material";

export const StyledModalContainer = styled(Modal)(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}))

export const StyledModal = styled('div')(({theme}) => ({
    backgroundColor: theme.palette.primary.light,
    width: 500,
    height: 300,
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 30px',

    '& .MuiButton-root': {
        width: '100%',
        padding: 10
    }
}))