import { useState, useCallback } from 'react';

function useToggle(initialValue: boolean = false) {
  const [isToggled, setToggle] = useState(initialValue);

  const toggle = useCallback(
    () => setToggle((toggleState) => !toggleState),
    [],
  );

  return [isToggled, toggle] as const;
}

export default useToggle;
