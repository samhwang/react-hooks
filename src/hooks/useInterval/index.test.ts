import { renderHook } from '@testing-library/react-hooks';
import useInterval from '.';

describe('useInterval hook', () => {
  let callback;

  beforeEach(() => {
    callback = jest.fn();
  });

  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    callback.mockRestore();
    jest.clearAllTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('Should render with default delay', () => {
    const { result } = renderHook(() => useInterval(callback));

    expect(result.current).toBeUndefined();
    expect(setInterval).toHaveBeenCalledWith(expect.any(Function), 0);
  });

  it('Should render with custom delay', () => {
    const { result } = renderHook(() => useInterval(callback, 5000));

    expect(result.current).toBeUndefined();
    expect(setInterval).toHaveBeenCalledWith(expect.any(Function), 5000);
  });

  it('Should repeatedly calls provided callback with a fixed time delay between each call', () => {
    renderHook(() => useInterval(callback, 200));
    expect(callback).not.toHaveBeenCalled();

    // fast-forward time until 1s before it Should be executed
    jest.advanceTimersByTime(199);
    expect(callback).not.toHaveBeenCalled();

    // fast-forward until 1st call Should be executed
    jest.advanceTimersByTime(1);
    expect(callback).toHaveBeenCalledTimes(1);

    // fast-forward until next timer Should be executed
    jest.advanceTimersToNextTimer();
    expect(callback).toHaveBeenCalledTimes(2);

    // fast-forward until 3 more timers Should be executed
    jest.advanceTimersToNextTimer(3);
    expect(callback).toHaveBeenCalledTimes(5);
  });

  it('Should clear interval on unmount', () => {
    const { unmount } = renderHook(() => useInterval(callback, 200));
    const initialTimerCount = jest.getTimerCount();

    unmount();

    expect(clearInterval).toHaveBeenCalled();
    expect(jest.getTimerCount()).toBe(initialTimerCount - 1);
  });

  it('Should handle new interval when delay is updated', () => {
    let delay = 200;
    const { rerender } = renderHook(() => useInterval(callback, delay));
    expect(callback).not.toHaveBeenCalled();

    // fast-forward initial delay
    jest.advanceTimersByTime(200);
    expect(callback).toHaveBeenCalledTimes(1);

    // update delay by increasing previous one
    delay = 500;
    rerender();

    // fast-forward initial delay again but this time it Should not execute the cb
    jest.advanceTimersByTime(200);
    expect(callback).toHaveBeenCalledTimes(1);

    // fast-forward remaining time for new delay
    jest.advanceTimersByTime(300);
    expect(callback).toHaveBeenCalledTimes(2);
  });

  it('Should clear pending interval when delay is updated', () => {
    let delay = 200;
    const { rerender } = renderHook(() => useInterval(callback, delay));
    const initialTimerCount = jest.getTimerCount();

    // update delay while there is a pending interval
    delay = 500;
    rerender();

    expect(clearInterval).toHaveBeenCalled();
    expect(jest.getTimerCount()).toBe(initialTimerCount);
  });
});
