import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { CommentCard } from './CommentCard';

export default {
    title: 'entities/comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comment: {
        id: '1',
        text: 'test1',
        user: { id: '1', username: 'user1' },
    },
};
export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
