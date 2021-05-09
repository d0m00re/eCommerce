import QtSelector, {IPropsQtSelector} from './QuantitySelector';
import React from 'react';
import {Story, Meta} from '@storybook/react';

export default {
    title : 'Molecules/QuantitySelector',
    component: QtSelector,
} as Meta; 
 


const Template: Story<IPropsQtSelector> = (args) => <QtSelector {...args} />;

// export const Exmple = Template.bind({});

export const Primary = Template.bind({});

Primary.args = {
    count : 42,
    fIncr : () => {},
    fDecr : () => {}

};