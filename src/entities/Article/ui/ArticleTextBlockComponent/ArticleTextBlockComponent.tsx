import { memo } from 'react';
import { classNames } from 'shared/lib/tests/classNames/classNames';
import { Text } from 'shared/ui/Text';
import { ArticleTextBlock } from '../../model/types/article';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
    const { className, block } = props;
    return (
        <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
            {block.title && (
                <Text title={block.title} className={cls.title} />
            )}
            {block.paragraphs.map((paragraph, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <Text key={`${i}_${paragraph}`} text={paragraph} className={cls.paragraph} />
            ))}

        </div>
    );
});
