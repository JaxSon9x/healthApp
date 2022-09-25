import { Box, Typography } from '@mui/material';
import React from 'react';
import color from 'src/themes/color';

export interface MealHistoryCardProps {
  background_image?: string;
  desc?: string,
  menu_id?: string
}

const MealHistoryCard: React.FC<MealHistoryCardProps> = (props) => {
  const { background_image, desc, menu_id } = props;
  return (
    <Box
      sx={{
        position: 'relative',
        '&::after': {
          content: '""',
          display: 'block',
          paddingBottom: '100%',
        },
        img: {
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        },
      }}
    >
      <img src={background_image} alt={desc} />
      <Box
        sx={{
          position: 'absolute',
          bgcolor: color.primary.light,
          bottom: 0,
          p: 1,
          color: color.light,
        }}
      >
        <Typography typography={'caption'}>{desc}</Typography>
      </Box>
    </Box>
  )
};

export default MealHistoryCard;