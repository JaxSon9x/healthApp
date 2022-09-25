import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import color from 'src/themes/color';
import * as _ from 'lodash';
import fontSize from 'src/themes/fontSize';
import { SquareImage } from './SquareImage';

type ProductItem = {
  image: string;
  date: string;
  time: string;
  title: string;
  tags: Array<string>;
  product_category?: string;
}
export interface ReccommendedCardProps {
  product: ProductItem,
}

const RecommendedCard: React.FC<ReccommendedCardProps> = (props) => {
  const { product } = props;
  return (
    <Stack>
      <Box sx={{ position: 'relative' }}>
        <SquareImage src={product.image} ratio={(9 / 16) * 100} />
        <Stack
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
          }}
          flexDirection="row"
          gap={1}
          color={color.light}
          bgcolor={color.primary.light}
          px={1}
        >
          <Typography fontSize={fontSize['0']}>{product.date}</Typography>
          <Typography fontSize={fontSize['0']}>{product.time}</Typography>
        </Stack>
      </Box>
      <Typography fontSize={fontSize['0']} lineHeight="22px" mt={1}>
        {product.title}
      </Typography>
      <Stack flexDirection="row" gap={1}>
        {_.map(product.tags, (tag, tagIndex) => (
          <Typography
            key={tagIndex}
            fontSize={fontSize['20']}
            color={color.primary.main}
          >
            #{tag}
          </Typography>
        ))}
      </Stack>
    </Stack>
  )
};

export default RecommendedCard;