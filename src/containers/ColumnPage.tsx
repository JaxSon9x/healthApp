import React from 'react';
import BaseLayout from 'src/layouts/Base';
import { Box, Grid, Stack, Typography } from '@mui/material';
import ColumnCard from 'src/components/ColumnCard';
import mock from 'src/mock/index.json';
import * as _ from 'lodash';
import color from 'src/themes/color';
import Button from 'src/components/Button';
import RecommendedCard from 'src/components/RecommendedCard';

const ColumnPage = () => {
  return (
    <BaseLayout>
      <Box maxWidth="lg" margin="auto" py={7}>
        <Grid container spacing={4}>
          {_.map(mock.column_page.product_categories, (category, index) => {
            return (
              <Grid item key={index} xs={6} md={3}>
                <Box bgcolor={color.dark_06} py={3} px={1}>
                  <ColumnCard category={category} />
                </Box>
              </Grid>
            );
          })}
        </Grid>
        <Grid container rowSpacing={2} columnSpacing={1} mt={7}>
          {_.map(mock.column_page.recommended_products, (product, index) => {
            return (
              <Grid item key={index} xs={6} md={3}>
                <RecommendedCard product={product} />
              </Grid>
            );
          })}
        </Grid>
        <Box mt={5} textAlign="center">
          <Button variant="contained" disableElevation sx={{ display: 'inline-block' }}>
            コラムをもっと見る
          </Button>
        </Box>
      </Box>
    </BaseLayout>
  );
};

export default ColumnPage;
