import { EntityState } from '@reduxjs/toolkit';

export interface ArticleDetailsCommentSchema extends EntityState<Comment>{
    isLoading?: boolean;
    error?: string;
    ids: string[];
    entities: Record<any, any>
}
