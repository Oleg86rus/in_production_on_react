import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import '@/app/styles/index.scss';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => <div style={{ padding: 100 }}><Story /></div>,
    ],
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
};

export const topLeft = Template.bind({});
topLeft.args = {
    value: undefined,
    defaultValue: 'Укажите страну',
    onChange: () => {},
    items: [
        { value: '1', content: 'test1' },
        { value: '2', content: 'test2' },
        { value: '3', content: 'test3' },
    ],
    readonly: false,
    direction: 'top left',
};

export const topRight = Template.bind({});
topRight.args = {
    value: undefined,
    defaultValue: 'Укажите страну',
    onChange: () => {},
    items: [
        { value: '1', content: 'test1' },
        { value: '2', content: 'test2' },
        { value: '3', content: 'test3' },
    ],
    readonly: false,
    direction: 'top right',
};

export const bottomLeft = Template.bind({});
bottomLeft.args = {
    value: undefined,
    defaultValue: 'Укажите страну',
    onChange: () => {},
    items: [
        { value: '1', content: 'test1' },
        { value: '2', content: 'test2' },
        { value: '3', content: 'test3' },
    ],
    readonly: false,
    direction: 'bottom left',
};

export const bottomRight = Template.bind({});
bottomRight.args = {
    value: undefined,
    defaultValue: 'Укажите страну',
    onChange: () => {},
    items: [
        { value: '1', content: 'test1' },
        { value: '2', content: 'test2' },
        { value: '3', content: 'test3' },
    ],
    readonly: false,
    direction: 'bottom right',
};
