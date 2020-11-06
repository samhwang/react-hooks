# useWindowSize React Hook

React hook `useWindowSize()` that will calculate the window view size, useful for mocking mobile devices
when testing frontend layouts.

## Usage

```typescript
const { width, height } = useWindowSize();
```

## Example

```tsx
export default function Component() {
  const { width, height } = useWindowSize();

  return <>{`{ width: ${width}, height: ${height} }`}</>;
}
```
