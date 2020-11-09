import { useState, useEffect, useCallback } from 'react';
function getSizeCallback(isClient) {
    if (!isClient) {
        return {
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0,
        };
    }
    const { innerWidth, innerHeight, outerWidth, outerHeight, } = window;
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
    const [windowSize, setWindowSize] = useState(getSize(isClient));
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
