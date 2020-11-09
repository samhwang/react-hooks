import { useState, useEffect, useCallback } from 'react';

interface WindowSizeType {
  innerWidth: number,
  innerHeight: number,
  outerWidth: number,
  outerHeight: number,
}

function getSizeCallback(isClient: boolean) {
  if (!isClient) {
    return {
      innerWidth: 0,
      innerHeight: 0,
      outerWidth: 0,
      outerHeight: 0,
    };
  }

  const {
    innerWidth,
    innerHeight,
    outerWidth,
    outerHeight,
  } = window;

  return {
    innerWidth,
    innerHeight,
    outerWidth,
    outerHeight,
  };
}

function useWindowSize() {
  const isClient = typeof window === 'object';

  const getSize = useCallback(getSizeCallback, [isClient]);

  const [windowSize, setWindowSize] = useState<WindowSizeType>(getSize(isClient));

  useEffect(() => {
    function handleResize() {
      if (!isClient) {
        return;
      }

      const size = getSize(isClient);
      setWindowSize(size);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [isClient, getSize]);

  return windowSize;
}

export { useWindowSize as default, getSizeCallback };
export type { WindowSizeType };
