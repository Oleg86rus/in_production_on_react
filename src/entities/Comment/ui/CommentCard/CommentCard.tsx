import { classNames } from '@/shared/lib/tests/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Text } from '@/shared/ui/Text';
import { Skeleton } from '@/shared/ui/Skeleton';
import { AppLink } from '@/shared/ui/AppLink';
import { VStack } from '@/shared/ui/Stack';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';
import { getRouteProfile } from '@/shared/const/router';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = (props: CommentCardProps) => {
    const { className, comment, isLoading } = props;
    if (isLoading) {
        return (
            <VStack
                data-testid="CommentCard.Loading"
                gap="16"
                max
                className={classNames(cls.CommentCard, {}, [
                    className,
                    cls.loading,
                ])}
            >
                <VStack
                    max
                    gap="16"
                    className={cls.header}
                >
                    <Skeleton
                        width={30}
                        height={30}
                        border="50%"
                    />
                    <Skeleton
                        width={100}
                        height={15}
                        className={cls.username}
                    />
                </VStack>
                <Skeleton
                    width="100%"
                    height={50}
                    className={cls.text}
                />
            </VStack>
        );
    }

    if (!comment) return null;

    return (
        <VStack
            data-testid="CommentCard.Content"
            gap="16"
            max
            className={classNames(cls.CommentCard, {}, [className])}
        >
            <AppLink
                to={`${getRouteProfile(comment.user.id)}`}
                className={cls.header}
            >
                {comment.user.avatar ? (
                    <Avatar
                        size={30}
                        src={comment.user.avatar}
                    />
                ) : null}
                <Text
                    className={cls.username}
                    title={comment.user.username}
                />
            </AppLink>
            <Text
                className={cls.text}
                text={comment.text}
            />
        </VStack>
    );
};
