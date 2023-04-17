import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/tests/classNames/classNames';
import { Page } from 'widgets/Page';
import { useParams } from 'react-router-dom';

interface ArticleEditPageProps {
    className?: string
}

const ArticleEditPage = ({ className }: ArticleEditPageProps) => {
    const { t } = useTranslation();
    const { id } = useParams<{id: string}>();
    const isEdit = Boolean(id);

    return (
        <Page className={classNames('', {}, [className])}>
            {isEdit ? t('Редактирование статьи с ID = ') + id : t('Создание новой статьи')}
        </Page>
    );
};

export default ArticleEditPage;
