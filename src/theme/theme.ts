import { createTheme } from '@mui/material/styles';
import { colors } from './colors';
import { typography } from './typography';

export const theme = createTheme({
    ...colors,
    ...typography
  });