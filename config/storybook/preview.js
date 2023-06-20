import { addDecorator } from '@storybook/react';
import {
    StyleDecorator,
} from '../../src/shared/config/storybook/StyleDecorator/StyleDocarator';
import {
    ThemeDecorator,
} from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {
    RouterDecorator,
} from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import {
    SuspenseDecorator,
} from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { Theme } from '../../src/shared/const/theme';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    layout: 'fullscreen',
};

addDecorator(RouterDecorator);
addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(SuspenseDecorator);
