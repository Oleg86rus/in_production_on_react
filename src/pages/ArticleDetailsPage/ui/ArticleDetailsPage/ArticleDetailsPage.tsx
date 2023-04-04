import { classNames } from 'shared/lib/tests/classNames/classNames';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article-details');
    const { id } = useParams<{id:string}>();
    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            {!id ? (t('Статья не найдена!')) : <ArticleDetails id={id} />}
        </div>
    );
};

export default memo(ArticleDetailsPage);
