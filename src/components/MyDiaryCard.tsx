import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import color from 'src/themes/color';
import fontSize from 'src/themes/fontSize';

export interface MyDiaryCardProps {
  date: string;
  time: string;
  desc: string;
}

const MyDiaryCard: React.FC<MyDiaryCardProps> = (props) => {
  const { date, time, desc } = props;
  return (
    <Box
      sx={{
        border: `2px solid ${color.gray['600']}`,
      }}
      p={2}
    >
      <Typography>{date}</Typography>
      <Typography>{time}</Typography>
      <Typography fontSize={fontSize['0']} mt={1}>
        {desc}
      </Typography>
    </Box>
  )
};

export default MyDiaryCard;