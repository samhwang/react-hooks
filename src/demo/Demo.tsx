import { useState, useEffect } from 'react';
import useWindowSize from '../hooks/useWindowSize';

function Demo() {
  const { width, height } = useWindowSize();

  const [isMobileView, setIsMobileView] = useState(false);
  useEffect(() => {
    // This is only for demo purposes, and won't actually affect the hook's functionality.
    const MAX_MOBILE_WIDTH = 960;
    const isMobileWidthView = width < MAX_MOBILE_WIDTH;

    setIsMobileView(isMobileWidthView);
  }, [width]);

  return (
    <>
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
}

export default Demo;
