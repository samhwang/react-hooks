import { useState, useEffect } from 'react';
import { action } from '@storybook/addon-actions';
import type { Meta } from '@storybook/react/types-6-0';
import useWindowSize from '.';

export const useWindowSizeDemo = () => {
  const {
    innerWidth,
    innerHeight,
    outerWidth,
    outerHeight,
  } = useWindowSize();

  const [isMobileView, setIsMobileView] = useState(false);

  // This is only for demo purposes, and won't actually affect the hook's functionality.
  const maxMobileWidth = 960;
  const isMobileWidthView = innerWidth < maxMobileWidth;

  useEffect(() => {
    setIsMobileView(isMobileWidthView);
  }, [innerWidth, isMobileWidthView]);

  useEffect(() => {
    const message = `{ innerWidth: ${innerWidth}, innerHeight: ${innerHeight}, outerWidth: ${outerWidth}, outerHeight: ${outerHeight} }`;
    action('window size')(message);
  }, [innerWidth, innerHeight, outerWidth, outerHeight]);

  return (
    <>
      <p>
        {`Max mobile width (for demo purposes): ${maxMobileWidth}`}
      </p>
      <p>
        {`Current view: ${isMobileView ? 'mobile' : 'desktop'}`}
      </p>
      <p>
        {`Current innerWidth: ${innerWidth}`}
      </p>
      <p>
        {`Current innerHeight: ${innerHeight}`}
      </p>
      <p>
        {`Current outererWidth: ${outerWidth}`}
      </p>
      <p>
        {`Current outerHeight: ${outerHeight}`}
      </p>
    </>
  );
};

const storyMeta = {
  title: 'Hooks/useWindowSize',
  component: useWindowSizeDemo,
};

export default storyMeta as Meta;
