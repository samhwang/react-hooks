import { useEffect } from 'react';
import { action } from '@storybook/addon-actions';
import type { Story, Meta } from '@storybook/react/types-6-0';
import useToggle from '.';

interface TemplateProps {
  initialValue: boolean;
}

const UseToggleTemplate: Story<TemplateProps> = ({ initialValue }) => {
  const [isToggled, toggleState] = useToggle(initialValue);

  useEffect(() => {
    action('current toggle state')(isToggled);
  }, [isToggled]);

  return (
    <>
      <button type="button" onClick={toggleState}>Toggle</button>
      <p>{`Current state: ${isToggled.toString()}`}</p>
    </>
  );
};

export const defaultOff = UseToggleTemplate.bind({});
defaultOff.args = {
  initialValue: false,
};

export const defaultOn = UseToggleTemplate.bind({});
defaultOn.args = {
  initialValue: true,
};

const storyMeta = {
  title: 'Hooks/useToggle',
  component: UseToggleTemplate,
};

export default storyMeta as Meta;
