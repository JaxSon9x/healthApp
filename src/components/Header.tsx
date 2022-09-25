import React, { ReactNode, useState } from 'react';
import { Badge, Box, Button, Drawer, Stack, Typography } from '@mui/material';
import * as _ from 'lodash';
import mock from 'src/mock/index.json';
import { Link } from 'react-router-dom';
import LogoIcon from './icons/LogoIcon';
import { Menu0Icon } from './icons/Menu0Icon';
import { Menu1Icon } from './icons/Menu1Icon';
import { Menu2Icon } from './icons/Menu2Icon';
import { MenuIcon } from './icons/MenuIcon';
import color from 'src/themes/color';

export type HeaderItem = {
  title: ReactNode;
  link: {
    title?: string;
    href: string;
  };
  icon?: ReactNode;
  count?: number;
};

export type HeaderProps = {
  logo?: ReactNode;
  items?: HeaderItem[];
  itemStyle?: {
    textColor?: any;
    iconColor?: any;
  };
};

const Header: React.FC<HeaderProps> = ({ logo, items, itemStyle }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <Box
      id="header"
      sx={{
        bgcolor: color.dark_05,
        p: 1,
        boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.160784)',
      }}
    >
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        sx={{
          '.MuiPaper-root': {
            bgcolor: color.gray['400'],
          },
        }}
      >
        {_.map(items, (item, index) => {
          return (
            <Box key={index} width={280}>
              <Box sx={{ height: '1px', background: color.light, opacity: 0.25 }} />
              <Link to={item.link.href} title={item.link.title}>
                <Box py={3} px={4}>
                  <Typography color={color.light}>{item.title}</Typography>
                </Box>
              </Link>
              <Box sx={{ height: '1px', background: color.dark_06, opacity: 0.25 }} />
            </Box>
          );
        })}
      </Drawer>
      <Stack alignItems="center" flexDirection="row" maxWidth="lg" margin="auto">
        {logo &&
          <Link to="/">
            <Box>{logo}</Box>
          </Link>
        }
        <Stack
          flexDirection="row"
          flexGrow={1}
          justifyContent="flex-end"
          alignItems="center"
          gap={4}
          sx={(theme) => ({
            [theme.breakpoints.down('md')]: {
              '.header-menu-item': {
                display: 'none',
              },
            },
          })}
        >
          {_.map(items, (item, index) => {
            return (
              <Box key={index} className="header-menu-item">
                <Link to={item.link.href} title={item.link.title}>
                  <Stack flexDirection="row" gap={1} alignItems="center">
                    <Badge badgeContent={item.count} color="primary">
                      {item.icon && <Box>{item.icon}</Box>}
                    </Badge>
                    <Typography
                      color={itemStyle?.textColor || Header.defaultProps?.itemStyle?.textColor}
                    >
                      {item.title}
                    </Typography>
                  </Stack>
                </Link>
              </Box>
            );
          })}
        </Stack>
        <Box pl={10}>
          <Button onClick={() => setOpenDrawer(true)}>
            <MenuIcon />
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

Header.defaultProps = {
  logo: <LogoIcon />,
  items: mock.header_menus.map((item, index) => {
    return {
      icon: [<Menu0Icon />, <Menu1Icon />, <Menu2Icon />][index],
      ...item,
    };
  }),
  itemStyle: {
    textColor: 'white',
    iconColor: '#FF963C',
  },
} as HeaderProps;

export default Header;
