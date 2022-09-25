import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { ScrollToTopIcon } from './icons/ScrollToTopIcon';

export const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const scrolEvent = (e: any) => {
      if (!show && window.scrollY > 100) {
        setShow(true);
      } else if (show && window.scrollY < 100) {
        setShow(false);
      }
    };

    window.addEventListener('scroll', scrolEvent);

    return () => {
      window.removeEventListener('scroll', scrolEvent);
    };
  }, [show]);

  if (show) {
    return (
      <Box
        sx={(theme) => ({
          position: 'fixed',
          bottom: 96,
          right: 96,
          cursor: 'pointer',
          [theme.breakpoints.down('md')]: {
            bottom: 70,
            right: 30,
          },
        })}
        onClick={() => window.scrollTo(0, 0)}
      >
        <ScrollToTopIcon />
      </Box>
    );
  }

  return null;
};
