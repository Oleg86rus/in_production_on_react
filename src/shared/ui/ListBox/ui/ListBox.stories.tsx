import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    value: undefined,
    defaultValue: 'Укажите страну',
    onChange: () => {},
    items: [
        { value: '1', content: 'test1' },
        { value: '2', content: 'test2' },
        { value: '3', content: 'test3' },
    ],
    readonly: false,
    direction: 'bottom',
};
