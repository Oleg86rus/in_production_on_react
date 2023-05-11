import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import '@/app/styles/index.scss';
import { Avatar } from './Avatar';
import avatarImg from '../../../assets/tests/avatar.jpg';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    size: 150,
    src: avatarImg,
};

export const Small = Template.bind({});
Small.args = {
    size: 50,
    src: avatarImg,
};
