import { Typography, styled } from "@mui/material";

export const SmallGrayText = styled(Typography)(({theme}) => ({
    color: theme.palette.primary.dark,
}))