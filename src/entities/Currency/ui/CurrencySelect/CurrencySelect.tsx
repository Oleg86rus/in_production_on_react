import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ListBox } from '@/shared/ui/Popups';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    className?: string,
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo(({
    className, value, onChange, readonly,
}: CurrencySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);
    const defaultValue = t('Укажите валюту');
    const label = t('Укажите валюту');

    return (
        <ListBox
            value={value}
            defaultValue={defaultValue}
            onChange={onChangeHandler}
            items={options}
            className={className}
            readonly={readonly}
            direction="top right"
            label={label}
        />
    );
});
