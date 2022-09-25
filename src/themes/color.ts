/* eslint-disable no-useless-computed-key */

const baseColor = {
  common: {
    black: '#000000',
    white: '#ffffff',
    gray: '#777777',
  },
  primary: {
    main: '#FF963C',
    light: '#FFCC21',
    dark: '#EA6C00',
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#8FE9D0',
    light: '#8FE9D0',
    dark: '#8FE9D0',
    contrastText: '#ffffff',
  },
  error: {
    main: '#f44336',
    light: '#e57373',
    dark: '#d32f2f',
    contrastText: '',
  },
  warning: {
    main: '#d32f2f',
    light: '#ffb74d',
    dark: '#f57c00',
    contrastText: '',
  },
  info: {
    main: '#29b6f6',
    light: '#4fc3f7',
    dark: '#0288d1',
    contrastText: '',
  },
  success: {
    main: '#66bb6a',
    light: '#81c784',
    dark: '#388e3c',
    contrastText: '',
  },
  opacity: {
    opacity: {
      dark: {
        'high-emphasis': 'rgba(21, 13, 44, 0.878431)',
        'medium-emphasis': 'rgba(21, 13, 44, 0.701961)',
        'low-emphasis': 'rgba(21, 13, 44, 0.380392)',
      },
      light: {
        'high-emphasis': 'rgba(255, 255, 255, 0.921569)',
        'medium-emphasis': 'rgba(255, 255, 255, 0.65098)',
        'low-emphasis': 'rgba(255, 255, 255, 0.431373)',
      },
    },
  },
  footer: {
    background: '#261D1D',
    copyright: '#504C4C',
    menu: '#CCCCCC',
  },
  gray: {
    [100]: '#261D1D',
    [200]: '#504C4C',
    [300]: '#8D8C8C',
    [400]: '#777777',
    [500]: '#F2F2F2',
    [600]: '#707070',
  },
  dark_05: '#414141',
  dark_06: '#2E2E2E',
  light: '#FFFFFF',
  shadow: '#FC7400',
  buttonGradient: 'linear-gradient(32.95deg, #FFCC21 8.75%, #FF963C 86.64%)',
};

const color = {
  ...baseColor,
};

export default color;
