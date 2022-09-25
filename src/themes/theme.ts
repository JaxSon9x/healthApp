import color from './color';
import typography from './typography';
import { IBreakpoint, ITheme } from './theme.type';

const breakpoints = {
  keys: ['xs', 'mxs', 'sm', 'md', 'lg', 'xl', 'xxl'] as Array<IBreakpoint>,
  values: {
    xs: 320,
    mxs: 375,
    sm: 576,
    md: 768,
    lg: 990,
    xl: 1366,
    xxl: 1920,
  },
};

const getThemes = (mode: any) => ({
  typography,
  breakpoints,
  shape: {
    borderRadius: 5,
  },
  palette: {
    mode,
    ...color,
  }
});

export default getThemes;
