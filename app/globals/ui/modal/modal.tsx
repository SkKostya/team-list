'use client';
import './modal.css';

import { createPortal } from 'react-dom';

interface IProps {
  children: React.ReactElement;
  isOpened: boolean;
  onClose: (isOpened: boolean) => void;
}

const Modal: React.FC<IProps> = ({ children, isOpened, onClose }) => {
  return (
    <>
      {createPortal(
        <div
          onClick={() => onClose(false)}
          className={`modal ${isOpened ? 'modal--opened' : ''}`}
        >
          <div onClick={(e) => e.stopPropagation()} className="modal__content">
            {children}
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default Modal;
