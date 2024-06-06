import './delete-employee.css';

import { Button, Modal } from '@/app/globals/ui/index.client';

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
