import './invite-employee.css';

import { Button, Modal } from '@/app/globals/ui/index.client';

interface IProps {
  email: string;
  isOpened: boolean;
  onClose: () => void;
}

const InviteEmployee: React.FC<IProps> = ({ email, isOpened, onClose }) => {
  return (
    <Modal isOpened={isOpened} onClose={onClose}>
      <div className="invite-employee">
        <div className="invite-employee__title">
          Приглашение отправлено на почту {email}
        </div>

        <div className="invite-employee__button">
          <Button onClick={onClose}>Закрыть</Button>
        </div>
      </div>
    </Modal>
  );
};

export default InviteEmployee;
