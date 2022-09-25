import React, { ReactNode } from 'react';
import * as _ from 'lodash';
import { Box, Stack } from '@mui/material';
import color from 'src/themes/color';
import { ScrollToTop } from './ScrollToTop';

type ItemFooter = {
  icon?: ReactNode;
  title?: string;
  href?: string;
};

export interface FooterProps {
  footerItems?: Array<ItemFooter>;
}

const Footer: React.FC<FooterProps> = (props) => {
  const { footerItems = [] } = props;

  return (
    <Box bgcolor={color.dark_05} id="footer">
      <Stack maxWidth="lg" flexDirection="row" gap={5} margin="auto" py={7} flexWrap="wrap">
        {_.map(footerItems, (item: ItemFooter, index: number) => (
          <a key={index} href={item.href} style={{ color: color.light, textDecoration: 'none' }}>
            {item.title}
          </a>
        ))}
      </Stack>
      <ScrollToTop />
    </Box>
  );
};

export default Footer;
