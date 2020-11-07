import { useState, useCallback } from 'react';
function useToggle(initialValue = false) {
    const [isToggled, setToggle] = useState(initialValue);
    const toggle = useCallback(() => setToggle((toggleState) => !toggleState), []);
    return [isToggled, toggle];
}
export default useToggle;
