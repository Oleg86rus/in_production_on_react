import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import React from 'react';
import { Text, TextSize, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Text',
    text: 'lorem lorem',
};

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'lorem lorem',
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Text',
};

export const Error = Template.bind({});
Error.args = {
    title: 'Text',
    text: 'lorem lorem',
    theme: TextTheme.ERROR,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Text',
    text: 'lorem lorem',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
    text: 'lorem lorem',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: 'Text',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeS = Template.bind({});
SizeS.args = {
    title: 'Text',
    text: 'text',
    size: TextSize.S,
};
SizeS.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeM = Template.bind({});
SizeM.args = {
    title: 'Text',
    text: 'text',
    size: TextSize.M,
};
SizeM.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeL = Template.bind({});
SizeL.args = {
    title: 'Text',
    text: 'text',
    size: TextSize.L,
};
SizeL.decorators = [ThemeDecorator(Theme.DARK)];
