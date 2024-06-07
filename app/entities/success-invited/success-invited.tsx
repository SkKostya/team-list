import './success-invited.css';

import { Button, Modal } from '@/app/globals/ui/index.client';

interface IProps {
  email: string;
  isOpened: boolean;
  onClose: () => void;
}

const SuccessInvited: React.FC<IProps> = ({ email, isOpened, onClose }) => {
  return (
    <Modal isOpened={isOpened} onClose={onClose}>
      <div className="success-invited">
        <div className="success-invited__title">
          Приглашение отправлено на почту {email}
        </div>

        <div className="success-invited__button">
          <Button onClick={onClose}>Закрыть</Button>
        </div>
      </div>
    </Modal>
  );
};

export default SuccessInvited;
