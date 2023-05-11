import { useTranslation } from 'react-i18next';
import { classNames, Mods } from '@/shared/lib/tests/classNames/classNames';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text';
import { Input } from '@/shared/ui/Input';
import { Loader } from '@/shared/ui/Loader';
import { Avatar } from '@/shared/ui/Avatar';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';
import { Country, CountrySelect } from '../../../Country';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean | undefined;
    error?: string;
    readonly?: boolean;
    onChangeFirstname?: (value? :string) => void;
    onChangeLastname?: (value? :string) => void;
    onChangeCity?: (value? :string) => void;
    onChangeAge?: (value? :string) => void;
    onChangeUsername?: (value? :string) => void;
    onChangeAvatar?: (value? :string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        onChangeFirstname,
        onChangeLastname,
        onChangeCity,
        onChangeAge,
        readonly,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props;
    const { t } = useTranslation('profile');
    if (isLoading) {
        return (
            <HStack justify="center" max className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}>
                <Loader />
            </HStack>
        );
    }
    const title = t('Произошла ошибка при загрузке профиля');
    const text = t('Попробуйте обновить страницу');

    if (error) {
        return (
            <HStack justify="center" max className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={title}
                    text={text}
                    align={TextAlign.CENTER}
                />
            </HStack>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    const placeholder = {
        first: t('Ваше имя'),
        lastname: t('Ваша фамилия'),
        age: t('Ваш возраст'),
        city: t('Город'),
        username: t('Имя пользователя'),
        avatar: t('Ведите ссылку на аватар'),
    };

    return (
        <VStack gap="16" max className={classNames(cls.ProfileCard, mods, [className])}>
            {data?.avatar && (
                <div className={cls.avatarWrapper}>
                    {/* eslint-disable-next-line i18next/no-literal-string */}
                    <Avatar src={data?.avatar} alt="avatar" />
                </div>
            )}
            <Input
                value={data?.first}
                placeholder={placeholder.first}
                className={cls.input}
                onChange={onChangeFirstname}
                readonly={readonly}
                data-testid="ProfileCard.firstname"
            />
            <Input
                value={data?.lastname}
                placeholder={placeholder.lastname}
                className={cls.input}
                onChange={onChangeLastname}
                readonly={readonly}
                data-testid="ProfileCard.lastname"
            />
            <Input
                value={data?.age}
                placeholder={placeholder.age}
                className={cls.input}
                onChange={onChangeAge}
                readonly={readonly}
                data-testid="ProfileCard.age"
            />
            <Input
                value={data?.city}
                placeholder={placeholder.city}
                className={cls.input}
                onChange={onChangeCity}
                readonly={readonly}
                data-testid="ProfileCard.city"
            />
            <Input
                value={data?.username}
                placeholder={placeholder.username}
                className={cls.input}
                onChange={onChangeUsername}
                readonly={readonly}
                data-testid="ProfileCard.username"
            />
            <Input
                value={data?.avatar}
                placeholder={placeholder.avatar}
                className={cls.input}
                onChange={onChangeAvatar}
                readonly={readonly}
                data-testid="ProfileCard.avatar"
            />
            <CurrencySelect
                className={cls.input}
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
            />
            <CountrySelect
                className={cls.input}
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
            />
        </VStack>
    );
};
