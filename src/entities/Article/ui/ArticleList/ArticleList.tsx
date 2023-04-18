import { classNames } from 'shared/lib/tests/classNames/classNames';
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import { Text, TextSize } from 'shared/ui/Text';
import { useTranslation } from 'react-i18next';
import {
    HTMLAttributeAnchorTarget, memo, useEffect, useRef, useState,
} from 'react';
import { Virtuoso, VirtuosoGrid, VirtuosoGridHandle } from 'react-virtuoso';
import { ARTICLE_LIST_ITEM_LOCALSTORAGE_IDX } from 'shared/const/localstorage';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { Article, ArticleView } from '../../model/types/article';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
    onLoadNextPart: () => void;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
        <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
    ));

export const ArticleList = memo((props: ArticleListProps) => {
    const { t } = useTranslation();
    const {
        className,
        articles,
        view = ArticleView.SMALL,
        isLoading,
        target,
        onLoadNextPart,
    } = props;

    const [selectedArticleId, setSelectedArticleId] = useState(1);
    const virtuosoGridRef = useRef<VirtuosoGridHandle>(null);

    useEffect(() => {
        const paged = sessionStorage.getItem(ARTICLE_LIST_ITEM_LOCALSTORAGE_IDX);
        // @ts-ignore
        setSelectedArticleId(+paged);
    }, []);

    useEffect(() => {
        let timoutId: NodeJS.Timeout;
        if (view === ArticleView.SMALL) {
            timoutId = setTimeout(() => {
                if (virtuosoGridRef.current) {
                    virtuosoGridRef.current.scrollToIndex(selectedArticleId);
                }
            }, 100);
        }
        return () => clearTimeout(timoutId);
    }, [selectedArticleId, view]);

    const renderArticle = (index: number, article: Article) => (
        <ArticleListItem
            article={article}
            view={view}
            className={cls.card}
            key={article.id}
            target={target}
            index={index}
        />
    );

    // eslint-disable-next-line react/no-unstable-nested-components
    const Footer = memo(() => {
        if (isLoading) {
            return (
                <div className={cls.skeleton}>
                    {getSkeletons(view)}
                </div>
            );
        }
        return null;
    });

    if (!isLoading && !articles.length) {
        return (
            <Text size={TextSize.L} title={t('Статьи не найдены!')} />
        );
    }

    // eslint-disable-next-line react/no-unstable-nested-components
    // const ItemContainerComp: FC<{index: number}> = ({ index }) => (
    //     <div className={cls.ItemContainer}>
    //         <ArticleListItemSkeleton view={view} className={cls.card} key={index} />
    //     </div>
    // );

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {view === ArticleView.BIG ? (
                <Virtuoso
                    style={{ height: '100%' }}
                    data={articles}
                    itemContent={renderArticle}
                    endReached={onLoadNextPart}
                    initialTopMostItemIndex={selectedArticleId}
                    components={{
                        Footer,
                    }}
                />
            )
                : (
                    <VirtuosoGrid
                        ref={virtuosoGridRef}
                        totalCount={articles.length}
                        endReached={onLoadNextPart}
                        data={articles}
                        itemContent={renderArticle}
                        listClassName={cls.itemWrapper}
                        components={{
                            Footer,
                        }}
                        scrollSeekConfiguration={{
                            enter: (velocity) => Math.abs(velocity) > 200,
                            exit: (velocity) => Math.abs(velocity) < 30,
                        }}
                    />
                )}

            {/* {articles.length > 0 */}
            {/*    ? articles.map(renderArticle) */}
            {/*    : null} */}
            {/* {isLoading && getSkeletons(view)} */}
        </div>
    );
});
