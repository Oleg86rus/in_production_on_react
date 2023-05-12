import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import cls from './StarRating.module.scss';
import { classNames } from '@/shared/lib/tests/classNames/classNames';
import { Icon } from '@/shared/ui/Icon';
import StarIcon from '@/shared/assets/icons/star.svg';

interface StarRatingProps {
    className?: string;
    onSelect?: (starsCount: number) => void;
    size?: number;
    selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = (props: StarRatingProps) => {
    const { t } = useTranslation();
    const {
        className,
        selectedStars = 0,
        onSelect,
        size = 30,
    } = props;
    const [currentStarsCount, setCurrentStarCount] = useState(0);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStarCount(starsCount);
        }
    };

    const onLeave = () => () => {
        if (!isSelected) {
            setCurrentStarCount(0);
        }
    };

    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount);
            setCurrentStarCount(starsCount);
            setIsSelected(true);
        }
    };

    return (
        <div className={classNames(cls.StarRating, {}, [className])}>
            {stars.map((starNumber) => (
                <Icon
                    className={classNames(
                        cls.starIcon,
                        { [cls.selected]: isSelected },
                        [currentStarsCount >= starNumber ? cls.hovered : cls.normal],
                    )}
                    Svg={StarIcon}
                    key={starNumber}
                    onMouseLeave={onLeave}
                    onMouseEnter={onHover(starNumber)}
                    width={size}
                    height={size}
                    onClick={onClick(starNumber)}
                />
            ))}
        </div>
    );
};
