import { useEffect } from 'react';
function useEffectOnce(callback = () => { }) {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(callback, []);
}
export default useEffectOnce;
