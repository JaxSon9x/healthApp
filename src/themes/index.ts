import { createTheme } from '@mui/material/styles';
import getThemes from './theme';

const themeCreated = createTheme(getThemes('light') as any);

export default themeCreated;
