import type { FC, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import { Transition } from 'react-transition-group';
import { X } from '@phosphor-icons/react';
import style from './modal.module.css';

type ModalProps = {
    show: boolean;
    onClose: () => void;
};

const DURATION = 150;

const defaultStyle = {
    transition: `opacity ${DURATION}ms ease-in-out,`
        + ` transform ${DURATION}ms ease-in-out`
};

const transitionStyle: any = {
    entering: { opacity: 0, transform: 'translateY(10px)' },
    entered: { opacity: 1, transform: 'translateY(0)' },
    exiting: { opacity: 0, transform: 'translateY(10px)' }
};

const Modal: FC<PropsWithChildren<ModalProps>> = (
    { show, onClose, children }
) =>
    createPortal(
        <Transition in={show} timeout={DURATION} unmountOnExit>
            {state => (
                <div
                    className={style.modal}
                    style={{ ...defaultStyle, ...transitionStyle[state] }}>
                    <button
                        className="md:text-white absolute right-4 top-4 z-40"
                        onClick={onClose}>
                        <X size={20} />
                    </button>
                    <div
                        className={style.modalContent}>
                        {children}
                    </div>
                </div>
            )}
        </Transition>,
        document.body
    );

export default Modal;
