import React from 'react';
import Button, {IButtonProps} from './Button';
import {Story, Meta} from '@storybook/react';

export default {
    title : 'Atoms/Button',
    component: Button,
} as Meta; 
 


const Template: Story<IButtonProps> = (args) => <Button {...args} />;

// export const Exmple = Template.bind({});

export const Primary = Template.bind({});

Primary.args = {
    onClick : () => {console.log('button click')},
    variant : 'primary',
    disabled : false,
    children : 'Hello World'
};

export const Secondary = Template.bind({});

Secondary.args = {
    onClick : () => {console.log('button click')},
    variant : 'secondary',
    disabled : false,
    children : 'Hello World'
}; 