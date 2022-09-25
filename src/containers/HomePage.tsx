import React from 'react';
import BaseLayout from 'src/layouts/Base';
import { Box, CircularProgress, Grid, Stack, Typography } from '@mui/material';
import mock from 'src/mock/index.json';
import * as _ from 'lodash';
import Button from 'src/components/Button';
import MealHistoryCard from 'src/components/MealHistoryCard';
import Category from 'src/components/Category';
import color from 'src/themes/color';
import fontSize from 'src/themes/fontSize';
import BodyFatGraph from 'src/components/BodyFatGraph';

const HomePage = () => {
  return (
    <BaseLayout>
      <Grid container>
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            img: {
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            },
            background: color.buttonGradient,
            height: 316,
            position: 'relative',
          }}
          maxHeight="100%"
        >
          <img src={mock.my_home_page.banner.image} alt="" />
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: color.light,
              svg: {
                filter: `drop-shadow(0px 0px 6px ${color.shadow})`,
              },
            }}
          >
            <CircularProgress
              variant="determinate"
              value={75}
              size={181}
              thickness={1}
              color={'inherit'}
            />
          </Box>
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: color.light,
              textShadow: `0px 0px 6px ${color.shadow}`,
            }}
          >
            <Stack flexDirection="row" alignItems="baseline" gap={0.5}>
              <Typography sx={{ fontSize: fontSize['3'], lineHeight: 0 }}>05/21</Typography>
              <Typography sx={{ fontSize: fontSize['4'], lineHeight: 0 }}>75%</Typography>
            </Stack>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            bgcolor: color.dark_06,
            height: 316,
            py: 2,
            px: 4,
            canvas: {
              maxHeight: '100%',
            },
          }}
        >
          <BodyFatGraph
            datasets={[
              {
                label: 'Dataset 1',
                data: _.range(0, 12).map(() => _.random(0, 100)),
                borderColor: '#8FE9D0',
                backgroundColor: '#8FE9D0',
                pointRadius: 8 - 3, // {design pointRadius} - {borderWidth}
                borderWidth: 3,
              },
              {
                label: 'Dataset 1',
                data: _.range(0, 12).map(() => _.random(0, 100)),
                borderColor: '#FFCC21',
                backgroundColor: '#FFCC21',
                pointRadius: 8 - 3, // {design pointRadius} - {borderWidth}
                borderWidth: 3,
              },
            ]}
            labels={_.range(1, 13).map((v) => `${v}月`)}
          />
        </Grid>
      </Grid>
      <Stack py={3} alignItems="center">
        <Category menus={[...mock.my_home_page.menus]} />
      </Stack>
      <Grid container spacing={1} maxWidth="lg" margin="auto">
        {_.map(mock.my_home_page.products, (product, index) => (
          <Grid item xs={6} md={3} key={index}>
            <MealHistoryCard {...product} />
          </Grid>
        ))}
      </Grid>
      <Stack alignItems="center" py={3} mb={5}>
        <Button variant="contained" color="primary" disableElevation>
          記録をもっと見る
        </Button>
      </Stack>
    </BaseLayout>
  );
};

export default HomePage;
