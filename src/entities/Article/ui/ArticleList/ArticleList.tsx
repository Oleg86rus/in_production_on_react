import { classNames } from '@/shared/lib/tests/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget } from 'react';
import { ArticleView } from '../../model/consts/articleConsts';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { Article } from '../../model/types/article';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, i) => (
        <ArticleListItemSkeleton className={cls.card} view={view} key={i} />
    ));

export const ArticleList = (props: ArticleListProps) => {
    const { t } = useTranslation();
    const {
        className,
        articles,
        view = ArticleView.SMALL,
        isLoading,
        target,
    } = props;

    const errorTitle = t('Статьи не найдены!');

    const renderArticle = (article: Article) => (
        <ArticleListItem
            article={article}
            view={view}
            className={cls.card}
            key={article.id}
            target={target}
        />
    );

    if (!isLoading && !articles.length) {
        return (
            <Text size={TextSize.L} title={errorTitle} />
        );
    }

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length > 0
                ? articles.map(renderArticle)
                : null}
            {isLoading && getSkeletons(view)}
        </div>
    );
};
