import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import '@/app/styles/index.scss';
import { CommentList } from './CommentList';

export default {
    title: 'entities/comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comments: [
        {
            id: '1',
            text: 'test1',
            user: { id: '1', username: 'user1' },
        },
    ],
};
export const Loading = Template.bind({});
Loading.args = {
    comments: [],
    isLoading: true,
};
