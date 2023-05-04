import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ListBox } from 'shared/ui/Popups/ui/ListBox/ListBox';
import { Country } from '../../model/types/Country';

interface CountrySelectProps {
    className?: string,
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Belarus, content: Country.Belarus },
];

export const CountrySelect = memo(({
    className, value, onChange, readonly,
}: CountrySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    const defaultValue = t('Укажите страну');
    const label = t('Укажите страну');

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
