import {
    ImgHTMLAttributes, memo, ReactElement, useLayoutEffect, useState,
} from 'react';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement>{
    className?: string;
    fallback?: ReactElement;
    errorFallBack?: ReactElement;
}

export const AppImage = memo((props: AppImageProps) => {
    const {
        className,
        src,
        alt = 'image',
        errorFallBack,
        fallback, ...otherProps
    } = props;
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(true);

    useLayoutEffect(() => {
        const img = new Image();
        img.src = src ?? '';
        img.onload = () => {
            setIsLoading(false);
        };
        img.onerror = () => {
            setIsLoading(false);
            setHasError(true);
        };
    });

    if (isLoading && fallback) {
        return fallback;
    }

    if (hasError && errorFallBack) {
        return errorFallBack;
    }

    return (
        <img className={className} src={src} alt={alt} {...otherProps} />
    );
});
