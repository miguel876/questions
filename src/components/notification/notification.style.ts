import { styled, Snackbar } from '@mui/material'

export const StyledSnackbar = styled(Snackbar)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: 20,
    borderRadius: 8
}))