import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text';
import { Button, ThemeButton } from 'shared/ui/Button';
import { classNames } from 'shared/lib/tests/classNames/classNames';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileReadonly, profileActions } from 'entities/Profile';
import { useCallback } from 'react';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const readonly = useSelector(getProfileReadonly);

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(true));
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Профиль')} />
            {readonly
                ? (
                    <Button
                        theme={ThemeButton.OUTLINE}
                        className={cls.editBtn}
                        onClick={onEdit}
                    >
                        {t('Редактировать')}
                    </Button>
                )
                : (
                    <Button
                        theme={ThemeButton.OUTLINE}
                        className={cls.editBtn}
                        onClick={onCancelEdit}
                    >
                        {t('Отменить')}
                    </Button>
                )}
        </div>
    );
};
