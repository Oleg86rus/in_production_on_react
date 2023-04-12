import { classNames } from 'shared/lib/tests/classNames/classNames';
import { memo, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { Text } from 'shared/ui/Text';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useDispatch, useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { AddCommentForm } from 'features/addCommentForm';
import { Button, ThemeButton } from 'shared/ui/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'shared/ui/Page';
import { fetchCommentsByArticlesId } from '../../model/services/fetchCommentsByArticlesId/fetchCommentsByArticlesId';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
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
    const navigate = useNavigate();
    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticlesId(id));
    });

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {!id ? (t('Статья не найдена!')) : (
                    <>
                        <Button theme={ThemeButton.OUTLINE} onClick={onBackToList}>
                            {t('Назад к списку')}
                        </Button>
                        <ArticleDetails id={id} />
                        <Text className={cls.commentTitle} title={t('Комментарии')} />
                        <AddCommentForm onSendComment={onSendComment} />
                        <CommentList isLoading={commentsIsLoading} comments={comments} />
                    </>
                )}
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
