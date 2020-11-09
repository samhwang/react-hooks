import { useEffect, useRef } from 'react';

function useInterval(
  callback: Function,
  delay?: number | null,
) {
  const savedCallback = useRef<Function>(() => { });

  // Remember the latest callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    if (delay !== null) {
      const tick = () => savedCallback.current();
      const interval = setInterval(tick, delay || 0);
      return () => clearInterval(interval);
    }

    return undefined;
  }, [delay]);
}

export default useInterval;
