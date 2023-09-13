import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from '@/shared/lib/tests/componentRender/ComponentRender';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('Test sidebar', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Test toggle', () => {
        componentRender(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
