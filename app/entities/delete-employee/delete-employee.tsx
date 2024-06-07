import './delete-employee.css';

import dynamic from 'next/dynamic';

import { Button } from '@/app/globals/ui/index.client';
const Modal = dynamic(() => import('../../globals/ui/modal'), { ssr: false });

interface IProps {
  isOpened: boolean;
  onClose: () => void;
}

const DeleteEmployee: React.FC<IProps> = ({ isOpened, onClose }) => {
  return (
    <Modal isOpened={isOpened} onClose={onClose}>
      <div className="delete-employee">
        <div className="delete-employee__title">
          Пользователь успешно удален
        </div>

        <div className="delete-employee__button">
          <Button onClick={onClose}>Закрыть</Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteEmployee;
