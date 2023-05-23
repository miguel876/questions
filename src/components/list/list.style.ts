import { styled, alpha } from "@mui/material";

export const StyledListItem = styled("div")(({theme}) => ({
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    display: 'flex',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',

    '&>div': {
        display: 'flex',
        gap: 10,
        alignItems: 'center',
    },
    '&:hover': {
        backgroundColor: alpha(theme.palette.primary.dark, 0.1)
    }
}))

