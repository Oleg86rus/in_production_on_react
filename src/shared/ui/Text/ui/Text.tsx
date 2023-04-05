import { classNames, Mods } from 'shared/lib/tests/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center'
}

export enum TextSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}

interface TextProps {
    className?: string,
    title?: string,
    text?: string,
    theme?: TextTheme,
    align?: TextAlign,
    size?: TextSize
}

export const Text = memo((props: TextProps) => {
    const {
        className, text, title, theme = TextTheme.PRIMARY, align = TextAlign.LEFT, size = TextSize.M,
    } = props;

    const mods: Mods = {
        [cls[theme]]: true,
        [cls[align]]: true,
        [cls[size]]: true,
    };

    return (
        <div className={classNames(cls.Text, mods, [className])}>
            <p className={cls.title}>{title}</p>
            <div className={cls.text}>{text}</div>
        </div>
    );
});
