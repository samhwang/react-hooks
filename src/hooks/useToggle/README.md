# useToggle hook

A simple boolean toggler hook

## Usage

```typescript
const [isToggled, toggle] = useToggle(initialValue);
```

Intial value must be a boolean value, `true` or `false`. Default value is `false`.

## Example

```tsx
export default function Component() {
  const [isToggled, toggle] = useToggle(true);
  return (
    <>
      <button type="button" onClick={toggle}>Toggle</button>
      <p>Current state: {isToggled.toString()}</p>
    </>
  );
}
```
