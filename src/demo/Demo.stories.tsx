import type { Story, Meta } from '@storybook/react/types-6-0';
import Demo from './Demo';

const storyMeta = {
  title: 'Demo',
  component: Demo,
};

export default storyMeta as Meta;

const Template: Story = (args) => <Demo {...args} />;

export const DemoWindowSize = Template.bind({});
