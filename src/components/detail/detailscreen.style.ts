import { styled, alpha, Typography } from "@mui/material";

export const StyledDetailContainer = styled('div')({
    paddingBottom: 20
})

export const StyledTitle = styled(Typography)({
    marginTop: 30,
})

export const StyledAnswers = styled(Typography)(({theme}) => ({
    border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
    borderRadius: 8,
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
    marginTop: 30
}))
