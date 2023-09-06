import { CSSProperties, useMemo } from 'react';
import { classNames, Mods } from '@/shared/lib/tests/classNames/classNames';
import cls from './Avatar.module.scss';
import { AppImage } from '../../AppImage';
import UserIcon from '../../../assets/icons/user-filled.svg';
import { Icon } from '@/shared/ui/Icon';
import { Skeleton } from '@/shared/ui/Skeleton';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
    fallbackInverted?: boolean;
}

export const Avatar = ({
    className, src, size, alt, fallbackInverted,
}: AvatarProps) => {
    const mods: Mods = {};
    const styles = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,
    }), [size]);

    const fallback = <Skeleton width={size} height={size} border="50%" />;
    const errorFallback = <Icon inverted={fallbackInverted} Svg={UserIcon} width={size} height={size} />;

    return (
        <AppImage
            fallback={fallback}
            errorFallBack={errorFallback}
            src={src}
            style={styles}
            alt={alt}
            className={classNames(cls.Avatar, mods, [className])}
        />
    );
};
