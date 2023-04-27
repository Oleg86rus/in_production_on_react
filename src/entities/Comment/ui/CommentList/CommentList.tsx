import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/tests/classNames/classNames';
import { Text } from 'shared/ui/Text';
import { VStack } from 'shared/ui/Stack';
import { CommentCard } from '../CommentCard/CommentCard';
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
            <VStack gap="16" max className={classNames('', {}, [className])}>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </VStack>
        );
    }

    const text = t('Комментарии отсутствуют');

    return (
        <VStack gap="16" max className={classNames('', {}, [className])}>
            {comments?.length
                ? comments?.map((com) => (
                    <CommentCard
                        isLoading={isLoading}
                        key={String(com)}
                        comment={com}
                    />
                ))
                : <Text text={text} />}
        </VStack>
    );
};
