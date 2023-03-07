import { classNames } from 'shared/lib/tests/classNames/classNames';
import { Modal } from 'shared/ui/Modal';
import { LoginFormAsync } from 'features/AuthByUsername/ui/LoginForm/LoginForm.async';
import { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader';

interface LoginModalProps {
    className?: string,
    isOpen: boolean,
    onClose: () => void
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => (
    <Modal
        isOpen={isOpen}
        onClose={onClose}
        className={classNames('', {}, [className])}
        lazy
    >
        <Suspense fallback={<Loader />}>
            <LoginFormAsync onSuccess={onClose} />
        </Suspense>
    </Modal>
);
