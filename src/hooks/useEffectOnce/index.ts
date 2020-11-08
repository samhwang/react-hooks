import { useEffect } from 'react';
import type { EffectCallback } from 'react';

function useEffectOnce(callback: EffectCallback = () => { }) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(callback, []);
}

export default useEffectOnce;
