import { useState, useEffect, useCallback } from 'react';

interface WindowSizeType {
    width: number;
    height: number;
}

function getSizeCallback(isClient: boolean) {
  if (!isClient) {
    return {
      width: 0,
      height: 0,
    };
  }

  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
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
