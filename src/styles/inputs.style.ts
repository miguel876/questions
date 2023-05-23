import { styled, alpha } from "@mui/material";

export const StyledTextField = styled('input')(({theme}) => ({
    width: '90%',
    padding: 20,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: alpha(theme.palette.primary.main, 0.1),
    fontSize: 14
}))