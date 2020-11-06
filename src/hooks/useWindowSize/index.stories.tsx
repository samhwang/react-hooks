import { useState, useEffect } from 'react';
import { action } from '@storybook/addon-actions';
import type { Meta } from '@storybook/react/types-6-0';
import useWindowSize from '.';

export const useWindowSizeDemo = () => {
  const { width, height } = useWindowSize();

  const [isMobileView, setIsMobileView] = useState(false);

  // This is only for demo purposes, and won't actually affect the hook's functionality.
  const maxMobileWidth = 960;
  const isMobileWidthView = width < maxMobileWidth;

  useEffect(() => {
    setIsMobileView(isMobileWidthView);
  }, [width, isMobileWidthView]);

  useEffect(() => {
    action('window size')(`{ width: ${width}, height: ${height} }`);
  }, [width, height]);

  return (
    <>
      <p>
        {`Max mobile width (for demo purposes): ${maxMobileWidth}`}
      </p>
      <p>
        {`Current view: ${isMobileView ? 'mobile' : 'desktop'}`}
      </p>
      <p>
        {`Current width: ${width}`}
      </p>
      <p>
        {`Current height: ${height}`}
      </p>
    </>
  );
};

const storyMeta = {
  title: 'Hooks/useWindowSize',
  component: useWindowSizeDemo,
};

export default storyMeta as Meta;
