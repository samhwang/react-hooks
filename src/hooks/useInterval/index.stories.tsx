import { useState } from 'react';
import type { Story, Meta } from '@storybook/react/types-6-0';
import useInterval from '.';

interface TemplateProps {
  delay: number | null;
}

const UseTimerTemplate: Story<TemplateProps> = ({ delay = 0 }) => {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount((currentCount: number) => currentCount + 1);
  }, delay);

  return <p>{count}</p>;
};

export const noDelay = UseTimerTemplate.bind({});
noDelay.args = {
  delay: null,
};

export const delay0sec = UseTimerTemplate.bind({});

export const delay1sec = UseTimerTemplate.bind({});
delay1sec.args = {
  delay: 1000,
};

export const delay5sec = UseTimerTemplate.bind({});
delay5sec.args = {
  delay: 5000,
};

const storyMeta = {
  title: 'Hooks/useInterval',
  component: UseTimerTemplate,
};

export default storyMeta as Meta;
