import {Button} from '../Components';

export default {
    title: 'Button',
    component: Button,
}

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  
}

export const Primary = Template.bind({});
Primary.args = {
  variant: 'Primary',
  label: 'Primary',
  size: 'medium'
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'Secondary',
  label: 'Secondary',
  size: 'medium'
};

export const Light = Template.bind({});
Light.args = {
  variant: 'Light',
  label: 'Light',
  size: 'medium'
};

export const Dark = Template.bind({});
Dark.args = {
  variant: 'Dark',
  label: 'Dark',
  size: 'medium'
};

export const Success = Template.bind({});
Success.args = {
  variant: 'Success',
  label: 'Success',
  size: 'medium'
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'Warning',
  label: 'Warning',
  size: 'medium'
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'Danger',
  label: 'Danger',
  size: 'medium'
};

export const Small = Template.bind({});
Small.args = {
  variant: 'Light',
  label: 'Small',
  size: 'small'
};

export const Medium = Template.bind({});
Medium.args = {
  variant: 'Light',
  label: 'Medium',
  size: 'medium'
};

export const Large = Template.bind({});
Large.args = {
  variant: 'Light',
  label: 'Large',
  size: 'large'
};