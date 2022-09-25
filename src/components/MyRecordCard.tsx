import { Box, Grid, Stack, Typography } from '@mui/material';
import React, { ReactNode, useState } from 'react';
import color from 'src/themes/color';
import fontSize from 'src/themes/fontSize';
import { SquareImage } from './SquareImage';

type RecordCardItemProps = {
  title: ReactNode;
  desc: ReactNode;
  image: string;
  link: { title?: string; href: string };
  id?: string;
};

const MyRecordCard = ({ image, title, desc, id }: RecordCardItemProps) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Grid item xs={12} md={4}>
      <Box
        p={3}
        bgcolor={color.primary.light}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={() => {
          if (id) {
            document.getElementById(id)?.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }
        }}
      >
        <Box
          sx={{
            position: 'relative',
            img: {
              filter: !isHover ? 'grayscale()' : undefined,
            },
          }}
        >
          <SquareImage src={image} />
          <Stack
            sx={{
              position: 'absolute',
              top: 0,
              width: '100%',
              height: '100%',
              bgcolor: !isHover ? 'rgba(0, 0, 0, 0.5)' : undefined,
            }}
            alignItems="center"
            justifyContent="center"
          >
            <Typography color={color.primary.light} fontSize={fontSize['17']}>
              {title}
            </Typography>
            <Typography
              sx={{
                color: color.light,
                bgcolor: color.primary.main,
                width: 160,
                textAlign: 'center',
                py: 0.25,
                mt: 1,
                cursor: 'pointer',
              }}
            >
              {desc}
            </Typography>
          </Stack>
        </Box>
      </Box>
    </Grid>
  );
};

export default MyRecordCard;
