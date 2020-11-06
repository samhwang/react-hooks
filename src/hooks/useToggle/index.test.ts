import { renderHook, act } from '@testing-library/react-hooks';
import useToggle from '.';

function assertToggle(initialValue: boolean) {
  describe('initial render', () => {
    const { result } = renderHook(() => useToggle(initialValue));

    it('Should render with correct initial value', () => {
      const [isToggled] = result.current;
      expect(isToggled).toEqual(initialValue);
    });

    it('Should render correct output types', () => {
      const [isToggled, toggleState] = result.current;
      expect(typeof toggleState).toBe('function');
      expect(typeof isToggled).toBe('boolean');
    });
  });

  describe('Run toggle', () => {
    it('Should toggle value', () => {
      const { result } = renderHook(() => useToggle(initialValue));
      const [, toggleState] = result.current;
      act(() => {
        toggleState();
      });
      const [newToggleState] = result.current;
      expect(newToggleState).toBe(!initialValue);
    });
  });
}

describe('useToggle hook', () => {
  describe('with initial value true', () => {
    const initialValue = true;
    assertToggle(initialValue);
  });

  describe('with initial value false', () => {
    const initialValue = false;
    assertToggle(initialValue);
  });
});
