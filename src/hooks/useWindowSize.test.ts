import { cleanup } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import useWindowSize, { getSizeCallback } from './useWindowSize';
import type { WindowSizeType } from './useWindowSize';

afterEach(() => {
  cleanup();
});

function setWindowSize({ width, height }: WindowSizeType) {
  global.innerWidth = width;
  global.innerHeight = height;
}

describe('Get Window Size Callback', () => {
  const sample: WindowSizeType = {
    width: 1920,
    height: 1080,
  };
  setWindowSize(sample);

  it('Should get correct width and height if it is client', () => {
    const output: WindowSizeType = getSizeCallback(true);
    expect(output).toEqual(sample);
  });

  it('Should return null if it\'s not client', () => {
    const output: WindowSizeType = getSizeCallback(false);
    expect(output).toEqual({
      width: 0,
      height: 0,
    });
  });
});

describe('useWindowSize hook', () => {
  it('Should change window size upon firing event', () => {
    const { result } = renderHook(() => useWindowSize());

    const assertWindowSize = (windowSize: WindowSizeType) => {
      act(() => {
        setWindowSize(windowSize);
        global.dispatchEvent(new Event('resize'));
      });
      expect(result.current).toEqual(windowSize);
    };

    assertWindowSize({
      width: 0,
      height: 0,
    });

    assertWindowSize({
      width: 1920,
      height: 1080,
    });
  });
});
