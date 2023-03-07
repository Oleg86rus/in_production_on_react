import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui/Button';
import { ThemeButton } from './Button';

describe('classNames', () => {
    test('Test render', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
        // screen.debug();
    });

    test('Test clear theme', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        // screen.debug();
    });
});
