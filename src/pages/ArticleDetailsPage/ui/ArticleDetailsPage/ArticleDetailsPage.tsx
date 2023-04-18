import { classNames } from 'shared/lib/tests/classNames/classNames';
import { memo, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArticleDetails, ArticleList } from 'entities/Article';
import { Text, TextSize } from 'shared/ui/Text';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useDispatch, useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { AddCommentForm } from 'features/addCommentForm';
import { Page } from 'widgets/Page';
import { fetchNextArticlePage } from 'pages/ArticlesPage/model/services/fetchNextArticlePage/fetchNextArticlePage';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { articleDetailsPageReducer } from '../../model/slices';
import {
    fetchArticleRecommendations,
} from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { getArticleRecommendationsIsLoading } from '../../model/selectors/recommendations';
import {
    getArticleRecommendations,
} from '../../model/slices/articleDetailsPageRecommendationsSlice';
import { fetchCommentsByArticlesId } from '../../model/services/fetchCommentsByArticlesId/fetchCommentsByArticlesId';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import cls from './ArticleDetailsPage.module.scss';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';

interface ArticleDetailsPageProps {
    className?: string
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article-details');
    const { id } = useParams<{id: string}>();
    const dispatch = useDispatch();
    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const recommendationsLoading = useSelector(getArticleRecommendationsIsLoading);

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlePage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticlesId(id));
        dispatch(fetchArticleRecommendations());
    });

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {!id ? (t('Статья не найдена!')) : (
                    <>
                        <ArticleDetailsPageHeader />
                        <ArticleDetails id={id} />
                        <Text
                            size={TextSize.L}
                            className={cls.commentTitle}
                            title={t('Рекомендуем')}
                        />
                        <ArticleList
                            articles={recommendations}
                            isLoading={recommendationsLoading}
                            className={cls.recommendations}
                            target="_blank"
                            onLoadNextPart={onLoadNextPart}
                        />
                        <Text
                            size={TextSize.L}
                            className={cls.commentTitle}
                            title={t('Комментарии')}
                        />
                        <AddCommentForm onSendComment={onSendComment} />
                        <CommentList isLoading={commentsIsLoading} comments={comments} />
                    </>
                )}
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
