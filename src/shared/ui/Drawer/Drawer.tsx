import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/lib/tests/classNames/classNames';
import { ReactNode } from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Drawer.module.scss';

interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Drawer = (props: DrawerProps) => {
    const { t } = useTranslation();
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
