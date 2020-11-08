# useInterval

A declarative way of using setInterval with react hook. Taken from [Dan Abramov's blog post](https://overreacted.io/making-setinterval-declarative-with-react-hooks/), and adopted it
into TS.

## Usage

```typescript
useInterval(callback, delay);
```

## Parameters

| Parameter | Description                                                                  | Type          | Default    |
| --------- | ---------------------------------------------------------------------------- | ------------- | ---------- |
| callback  | The callback function to execute after every `delay` seconds                 | function      | `() => {}` |
| delay     | The delay amount in miliseconds. Set this to `null` to "pause" the interval. | number / null | null       |

## Return

This hook does not return anything.

## Example

```tsx
export default function Counter({ delay = 1000 }) {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount((currentCount) => currentCount + 1);
  }, delay);

  return <p>{count}</p>;
}
```
