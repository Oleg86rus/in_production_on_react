import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';

interface PageLoaderProps {
    className?: string
}

export const Loader = ({ className }: PageLoaderProps) => (
    <div className={classNames('page__loader', {}, [className])}>
        <div className="lds-spinner">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
        </div>
    </div>
);
