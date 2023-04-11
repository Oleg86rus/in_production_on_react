import { classNames } from 'shared/lib/tests/classNames/classNames';
import { memo } from 'react';
import { ArticleList } from 'entities/Article';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string
}

const ArticlesPage = ({ className }: ArticlesPageProps) => (
    <div className={classNames(cls.ArticlesPage, {}, [className])}>
        <ArticleList
            isLoading
            articles={[]}
        />
    </div>
);

export default memo(ArticlesPage);
