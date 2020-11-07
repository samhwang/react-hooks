import { useState, useEffect, useCallback } from 'react';
function getSizeCallback(isClient) {
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
