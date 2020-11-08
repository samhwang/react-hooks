# useToggle hook

A simple boolean toggler hook

## Usage

```typescript
const [isToggled, toggle] = useToggle(initialValue);
```

## Parameters

| Parameter    | Description          | Type    | Default |
| ------------ | -------------------- | ------- | ------- |
| initialValue | initial toggle state | boolean | `false` |

## Return

This hook return a boolean toggle state, and a function to toggle that state.

## Example

```tsx
export default function Component() {
  const [isToggled, toggle] = useToggle(true);
  return (
    <>
      <button type="button" onClick={toggle}>
        Toggle
      </button>
      <p>Current state: {isToggled.toString()}</p>
    </>
  );
}
```
