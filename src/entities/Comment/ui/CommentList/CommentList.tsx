import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/tests/classNames/classNames';
import { Text } from 'shared/ui/Text';
import { CommentCard } from 'entities/Comment/ui/CommentCard/CommentCard';
import cls from './CommentList.module.scss';
import { Comment } from '../../model/types/comment';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = (props: CommentListProps) => {
    const { t } = useTranslation();
    const { className, comments, isLoading } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentList, {}, [className])}>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />

            </div>
        );
    }

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length
                ? comments.map((com, i) => (
                    <CommentCard
                        // eslint-disable-next-line react/no-array-index-key
                        key={i}
                        isLoading={isLoading}
                        className={cls.comment}
                        comment={com}
                    />
                ))
                : <Text text={t('Комментарии отсутствуют')} />}
        </div>
    );
};
