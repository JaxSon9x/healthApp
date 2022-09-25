/* eslint-disable no-unused-vars */
export type IBreakpoint = 'xs' | 'mxs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type ITheme = {
  breakpoints: {
    between?: (start: IBreakpoint, end: IBreakpoint) => any;
    down?: (key: IBreakpoint) => any;
    keys?: Array<IBreakpoint>;
    not?: (key: IBreakpoint) => any;
    only?: (key: IBreakpoint) => any;
    up?: (key: IBreakpoint) => any;
    unit?: string;
    values?: { [key in IBreakpoint]: number };
  };
  direction: string;
  palette: {
    footer: {
      background: '#261D1D';
      copyright: '#504C4C';
      menu: '#CCCCCC';
    };
    action: {
      active: '#fff';
      hover: 'rgba(255, 255, 255, 0.08)';
      hoverOpacity: 0.08;
      selected: 'rgba(255, 255, 255, 0.16)';
      selectedOpacity: 0.16;
      disabled: 'rgba(255, 255, 255, 0.3)';
      disabledBackground: 'rgba(255, 255, 255, 0.12)';
      disabledOpacity: 0.38;
      focus: 'rgba(255, 255, 255, 0.12)';
      focusOpacity: 0.12;
      activatedOpacity: 0.24;
    };
    background: {
      paper: string;
      default: string;
    };
    common: {
      black: string;
      white: string;
      gray: string;
    };
    error: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
    grey: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
      A100: string;
      A200: string;
      A400: string;
      A700: string;
    };
    info: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
    mode: 'dark' | 'light';
    primary: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
    secondary: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
    success: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
    text: {
      primary: string;
      secondary: string;
      disabled: string;
      icon: string;
    };
    warning: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
    dark_05: string,
    dark_03: string,
  };
  shadows: string[];
  shape: {
    borderRadius: number;
  };
  spacing: (value: any) => any;
  transitions: {
    create: () => any;
    getAutoHeightDuration: () => any;
    duration: {
      shortest: number;
      shorter: number;
      short: number;
      standard: number;
      complex: number;
      enteringScreen: number;
      leavingScreen: number;
    };
    easing: {
      easeInOut: string;
      easeOut: string;
      easeIn: string;
      sharp: string;
    };
    typography: {
      fontFamily: 'ArminGrotesk, Roboto';
      fontSize: 16;
      htmlFontSize: 16;
      fontWeightRegular: 400;
      fontWeightMedium: 600;
      fontWeightBold: 800;
      title: {
        fontWeight: 400;
        lineHeight: 120;
        fontSize: '9.6rem';
        letterSpacing: '0';
      };
      h1: {
        fontWeight: 400;
        lineHeight: 80;
        fontSize: '7.2rem';
        letterSpacing: '0';
        fontFamily: 'ArminGrotesk, Roboto';
      };
      h2: {
        fontWeight: 400;
        lineHeight: 68;
        fontSize: '6rem';
        letterSpacing: '0';
        fontFamily: 'ArminGrotesk, Roboto';
      };
      h3: {
        fontWeight: 400;
        lineHeight: 56;
        fontSize: '4.4rem';
        letterSpacing: '0';
        fontFamily: 'ArminGrotesk, Roboto';
      };
      h4: {
        fontWeight: 400;
        lineHeight: 40;
        fontSize: '3.2rem';
        letterSpacing: '0';
        fontFamily: 'ArminGrotesk, Roboto';
      };
      h5: {
        fontWeight: 400;
        lineHeight: 32;
        fontSize: '2.6rem';
        letterSpacing: '0';
        fontFamily: 'ArminGrotesk, Roboto';
      };
      h6: {
        fontWeight: 400;
        lineHeight: 28;
        fontSize: '2rem';
        letterSpacing: '0';
        fontFamily: 'ArminGrotesk, Roboto';
      };
      body1: {
        fontWeight: 400;
        lineHeight: 24;
        fontSize: '1rem';
        letterSpacing: '0';
        fontFamily: 'ArminGrotesk, Roboto';
      };
      headTitle: {
        fontSize: '2.3rem';
        lineHeight: 40;
      };
      body2: {
        fontWeight: 400;
        lineHeight: 20;
        fontSize: '1.5rem';
        letterSpacing: '0';
        fontFamily: 'ArminGrotesk, Roboto';
      };
      caption: {
        fontWeight: 400;
        lineHeight: 18;
        fontSize: '1.4rem';
        letterSpacing: '0.1';
        fontFamily: 'ArminGrotesk, Roboto';
      };
      fontWeightLight: 300;
      subtitle1: {
        fontFamily: 'ArminGrotesk, Roboto';
        fontWeight: 400;
        fontSize: '1.1428571428571428rem';
        lineHeight: 1.75;
      };
      subtitle2: {
        fontFamily: 'ArminGrotesk, Roboto';
        fontWeight: 600;
        fontSize: '1rem';
        lineHeight: 1.57;
      };
      button: {
        fontFamily: 'ArminGrotesk, Roboto';
        fontWeight: 600;
        fontSize: '1rem';
        lineHeight: 1.75;
        textTransform: 'uppercase';
      };
      overline: {
        fontFamily: 'ArminGrotesk, Roboto';
        fontWeight: 400;
        fontSize: '0.8571428571428571rem';
        lineHeight: 2.66;
        textTransform: 'uppercase';
      };
    };
  };
  zIndex: {
    mobileStepper: 1000;
    fab: 1050;
    speedDial: 1050;
    appBar: 1100;
    drawer: 1200;
    modal: 1300;
    snackbar: 1400;
    tooltip: 1500;
  };
};
