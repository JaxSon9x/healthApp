import { Box, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import color from 'src/themes/color';
import * as _ from 'lodash';

type Link = {
  title: string;
  href: string;
}

type MenuItem = {
  icon?: string;
  title?: string;
  id?: string;
  link?: Link;
}
export interface CategoryProps {
  menus?: Array<MenuItem>
}

const Category: React.FC<CategoryProps> = (props) => {
  const { menus = [] } = props;
  return (
    <Grid container spacing={1} maxWidth="lg" margin="auto">
      {_.map(menus, (menu, index) => {
        return (
          <Grid
            item
            xs={6}
            md={3}
            key={index}
            sx={{ textAlign: 'center', position: 'relative' }}
          >
            <Box
              sx={{
                position: 'relative',
                cursor: 'pointer',
                width: 134,
                height: 134,
                background: color.buttonGradient,
                clipPath: 'polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)',
                display: 'inline-block',
              }}
            />
            <Stack
              sx={{ position: 'absolute', width: '100%', height: '100%', top: 0 }}
              alignItems="center"
              justifyContent="center"
            >
              <Box>
                <img src={menu.icon} />
              </Box>
              <Typography variant="h6" color={color.light}>
                {menu.title}
              </Typography>
            </Stack>
          </Grid>
        );
      })}
    </Grid>
  )
};

export default Category;