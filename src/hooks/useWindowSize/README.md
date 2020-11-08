# useWindowSize

Calculate the window view size, useful for mocking mobile devices when testing frontend layouts.

## Usage

```typescript
const { innerWidth, innerHeight, outerWidth, outerHeight } = useWindowSize();
```

## Parameter

This hook does not take a parameter.

## Return

This hook return the `innerHeight`, `innerWidth`, `outerHeight` and `outerWidth` of
the JS `Window` object. For more information, read the [MDN Web docs](https://developer.mozilla.org/en-US/docs/Web/API/Window).

## Example

```tsx
export default function Component() {
  const { innerWidth, innerHeight, outerWidth, outerHeight } = useWindowSize();
  // The rest of the component
}
```
