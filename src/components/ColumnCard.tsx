import { Box, Typography } from '@mui/material';
import React from 'react';
import color from 'src/themes/color';
import fontSize from 'src/themes/fontSize';

export interface ColumnCardProps {
  category: {
    title: string,
    desc: string;
  }
}

const ColumnCard: React.FC<ColumnCardProps> = (props) => {
  const { category } = props;
  return (
    <Box bgcolor={color.dark_06} py={3} px={1}>
      <Typography
        textAlign="center"
        fontSize={fontSize['17']}
        textTransform="uppercase"
        color={color.primary.light}
      >
        {category.title}
      </Typography>
      <Box
        sx={{
          height: '1px',
          margin: 'auto',
          width: 56,
          bgcolor: color.light,
          my: 1,
        }}
      />
      <Typography textAlign="center" color={color.light}>
        {category.desc}
      </Typography>
    </Box>
  )
};

export default ColumnCard;