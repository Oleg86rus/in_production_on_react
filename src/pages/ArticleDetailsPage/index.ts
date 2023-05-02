export { articleDetailsPageReducer } from './model/slices';

export type { ArticlesDetailsPageSchema } from './model/types';

export type {
    ArticleDetailsRecommendationsSchema,
} from './model/types/ArticleDetailsRecommendationsSchema';

export type { ArticleDetailsCommentSchema } from './model/types/ArticleDetailsCommentSchema';

export { ArticleDetailsPageAsync as ArticleDetailsPage } from './ui/ArticleDetailsPage/ArticleDetailsPage.async';
