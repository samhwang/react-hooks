import { cleanup } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import useWindowSize, { getSizeCallback } from '.';
import type { WindowSizeType } from '.';

afterEach(() => {
  cleanup();
});

function setWindowSize({
  innerWidth,
  innerHeight,
  outerWidth,
  outerHeight,
}: WindowSizeType) {
  global.innerWidth = innerWidth;
  global.innerHeight = innerHeight;
  global.outerWidth = outerWidth;
  global.outerHeight = outerHeight;
}

describe('Get Window Size Callback', () => {
  const sample: WindowSizeType = {
    innerWidth: 1920,
    innerHeight: 1080,
    outerWidth: 1920,
    outerHeight: 1080,
  };
  setWindowSize(sample);

  it('Should get correct width and height if it is client', () => {
    const output: WindowSizeType = getSizeCallback(true);
    expect(output).toEqual(sample);
  });

  it('Should return null if it\'s not client', () => {
    const output: WindowSizeType = getSizeCallback(false);
    expect(output).toEqual({
      innerWidth: 0,
      innerHeight: 0,
      outerWidth: 0,
      outerHeight: 0,
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
      innerWidth: 0,
      innerHeight: 0,
      outerWidth: 0,
      outerHeight: 0,
    });

    assertWindowSize({
      innerWidth: 1920,
      innerHeight: 1080,
      outerWidth: 1920,
      outerHeight: 1080,
    });
  });
});
