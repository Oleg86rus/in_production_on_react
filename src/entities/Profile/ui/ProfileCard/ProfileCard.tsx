import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/tests/classNames/classNames';
import { Text } from 'shared/ui/Text';
import { Input } from 'shared/ui/Input';
import { Loader } from 'shared/ui/Loader';
import { TextAlign, TextTheme } from 'shared/ui/Text/ui/Text';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile,
    isLoading?: boolean | undefined,
    error?: string,
    readonly?: boolean,
    onChangeFirstname: (value? :string) => void,
    onChangeLastname: (value? :string) => void,
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className, data, isLoading, error, onChangeFirstname, onChangeLastname, readonly,
    } = props;
    const { t } = useTranslation('profile');
    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте обновить страницу')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.data}>
                <Input
                    value={data?.first}
                    placeholder={t('Ваше имя')}
                    className={cls.input}
                    onChange={onChangeFirstname}
                    readonly={readonly}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Ваша фамилия')}
                    className={cls.input}
                    onChange={onChangeLastname}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};
