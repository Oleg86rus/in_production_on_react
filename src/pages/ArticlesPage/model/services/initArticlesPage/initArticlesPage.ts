import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlesPageInited } from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { articlesPageActions } from 'pages/ArticlesPage/model/slices/articlePageSlice';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList';
import { SortOrder } from 'shared/types';
import { ArticleSortField, ArticleType } from 'entities/Article';

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
    'articlesPage/initArticlesPage',
    async (searchParams, thunkAPI) => {
        const {
            getState, dispatch,
        } = thunkAPI;
        const inited = getArticlesPageInited(getState());

        if (!inited) {
            const orderFromUrl = searchParams.get('order') as SortOrder;
            const sortFromUrl = searchParams.get('sort') as ArticleSortField;
            const searchFromUrl = searchParams.get('search');
            const typeFromUrl = searchParams.get('type') as ArticleType;

            if (orderFromUrl) dispatch(articlesPageActions.setOrder(orderFromUrl));
            if (sortFromUrl) dispatch(articlesPageActions.setSort(sortFromUrl));
            if (searchFromUrl) dispatch(articlesPageActions.setSearch(searchFromUrl));
            if (typeFromUrl) dispatch(articlesPageActions.setType(typeFromUrl));

            dispatch(articlesPageActions.initState());
            dispatch(fetchArticlesList({}));
        }
    },
);