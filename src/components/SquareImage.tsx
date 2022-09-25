import { Box } from '@mui/material';

export const SquareImage = ({ src, alt, ratio }: { src: string; alt?: string; ratio?: number }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        '&::after': {
          content: '""',
          display: 'block',
          pb: ratio ? `${ratio}%` : '100%',
        },
        img: {
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        },
      }}
    >
      <img src={src} alt={alt} />
    </Box>
  );
};
