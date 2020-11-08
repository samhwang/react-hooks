import { action } from '@storybook/addon-actions';
import type { Meta } from '@storybook/react/types-6-0';
import useEffectOnce from '.';

export const useEffectOnceDemo = () => {
  useEffectOnce(() => {
    action('effect should run now')('confirmed');
  });

  return <div />;
};

const storyMeta = {
  title: 'Hooks/useEffectOnce',
  component: useEffectOnceDemo,
};

export default storyMeta as Meta;
