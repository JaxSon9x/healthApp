import lineHeight from './lineHeight';
import fontSize from './fontSize';
import letterSpacing from './letterSpacing';
import { TypographyOptions } from '@mui/material/styles/createTypography';

const typography: TypographyOptions = {
  allVariants: {
    fontFamily: ['Inter', 'sans-serif'].join(','),
    fontSize: 16,
    lineHeight: 3 / 2, // 150% of fontSize
  },
  htmlFontSize: 16,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 800,
  h1: {
    fontWeight: 400,
    lineHeight: lineHeight[1],
    fontSize: fontSize[10],
    letterSpacing: letterSpacing[0],
  },
  h2: {
    fontWeight: 400,
    lineHeight: lineHeight[2],
    fontSize: fontSize[9],
    letterSpacing: letterSpacing[0],
  },
  h3: {
    fontWeight: 400,
    lineHeight: lineHeight[3],
    fontSize: fontSize[8],
    letterSpacing: letterSpacing[0],
  },
  h4: {
    fontWeight: 400,
    lineHeight: lineHeight[4],
    fontSize: fontSize[7],
    letterSpacing: letterSpacing[0],
  },
  h5: {
    fontWeight: 400,
    lineHeight: lineHeight[5],
    fontSize: fontSize[6],
    letterSpacing: letterSpacing[0],
  },
  h6: {
    fontWeight: 400,
    lineHeight: lineHeight[6],
    fontSize: fontSize[17],
    letterSpacing: letterSpacing[0],
  },
  body1: {
    fontWeight: 400,
    lineHeight: lineHeight[7],
    fontSize: fontSize[3],
    letterSpacing: letterSpacing[0],
  },
  body2: {
    fontWeight: 400,
    lineHeight: lineHeight[8],
    fontSize: fontSize[2],
    letterSpacing: letterSpacing[0],
  },
  caption: {
    fontWeight: 400,
    lineHeight: lineHeight[9],
    fontSize: fontSize[1],
    letterSpacing: letterSpacing[1],
  },
};

export default typography;
