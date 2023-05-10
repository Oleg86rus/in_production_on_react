import { classNames, Mods } from 'shared/lib/tests/classNames/classNames';
import { ReactNode } from 'react';
import { Portal } from '../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';
import cls from './Drawer.module.scss';

interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Drawer = (props: DrawerProps) => {
    const {
        className, onClose, isOpen, children,
    } = props;

    const mods: Mods = {
        [cls.opened]: isOpen,
    };
    return (
        <Portal>
            <div className={classNames(cls.Drawer, mods, [className])}>
                <Overlay onClick={onClose} />
                <div
                    className={cls.content}
                >
                    {children}
                </div>
            </div>
        </Portal>
    );
};
