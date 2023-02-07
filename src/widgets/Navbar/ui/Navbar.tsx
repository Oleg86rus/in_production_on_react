import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkThem } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>
            <AppLink
                theme={AppLinkThem.SECONDARY}
                to="/"
                className={cls.mainLink}
            >
                Главная
            </AppLink>
            <AppLink
                theme={AppLinkThem.SECONDARY}
                to="/about"
            >
                О сайте
            </AppLink>
        </div>

    </div>
);
