import { classNames } from 'shared/lib/tests/classNames/classNames';
import { memo, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { Text } from 'shared/ui/Text';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useDispatch, useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { AddCommentForm } from 'features/addCommentForm';
import {
    fetchCommentsByArticlesId,
} from '../../model/services/fetchCommentsByArticlesId/fetchCommentsByArticlesId';
import {
    addCommentForArticle,
} from '../../model/services/addCommentForArticle/addCommentForArticle';
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import cls from './ArticleDetailsPage.module.scss';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';

interface ArticleDetailsPageProps {
    className?: string
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article-details');
    const { id } = useParams<{id: string}>();
    const dispatch = useDispatch();
    const reducers: ReducersList = {
        articleDetailsComments: articleDetailsCommentsReducer,
    };
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticlesId(id));
    });

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {!id ? (t('Статья не найдена!')) : (
                    <>
                        <ArticleDetails id={id} />
                        <Text className={cls.commentTitle} title={t('Комментарии')} />
                        <AddCommentForm onSendComment={onSendComment} />
                        <CommentList isLoading={commentsIsLoading} comments={comments} />
                    </>
                )}
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
