import React, { useEffect, useState } from 'react';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import { Box } from '@mui/material';
import mock from 'src/mock/index.json';

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  const [minHeight, setMinHeight] = useState<any>(undefined);

  useEffect(() => {
    const footer = document.getElementById('footer');
    const header = document.getElementById('header');
    if (footer && header) {
      setMinHeight(footer.getBoundingClientRect().height + header.getBoundingClientRect().height);
    }
  });

  return (
    <>
      <Header />
      <Box
        sx={{
          minHeight: minHeight !== undefined ? `calc(100vh - ${minHeight}px)` : undefined,
        }}
      >
        {children}
      </Box>
      <Footer footerItems={mock.footer} />
    </>
  );
};

export default BaseLayout;
