'use client';
import './invite-employee.css';

import { useState } from 'react';

import {
  Button,
  CheckboxSelect,
  Input,
  Modal,
} from '@/app/globals/ui/index.client';
import { Icons } from '@/app/globals/ui/index.server';

import { ROLES, RolesListInterface } from '../../globals/constants';

interface IProps {
  isOpened: boolean;
  onClose: () => void;
  onInvite: (email: string, roles: RolesListInterface[]) => void;
}

const ALL = 'Все';

const InviteEmployee: React.FC<IProps> = ({ isOpened, onClose, onInvite }) => {
  const [email, setEmail] = useState('');
  const [roles, setRoles] = useState<RolesListInterface[]>([]);

  const handleRolesChanged = (role: RolesListInterface) => {
    const newRoles = roles.slice();

    if (role.key === ALL) {
      const shouldAddAll = newRoles.length !== ROLES.length;
      setRoles(shouldAddAll ? ROLES : []);
      return;
    }

    const currentRoleIndex = newRoles.findIndex(
      (item) => item.key === role.key
    );
    if (currentRoleIndex !== -1) {
      newRoles.splice(currentRoleIndex, 1);
      const allTabIndex = newRoles.findIndex((item) => item.key === ALL);
      allTabIndex !== -1 && newRoles.splice(allTabIndex, 1);
    } else {
      newRoles.push(role);
      const isHasAllRoles = ROLES.length - 1 === newRoles.length;
      isHasAllRoles && newRoles.unshift(ROLES[0]);
    }

    setRoles(newRoles);
  };

  return (
    <Modal isOpened={isOpened} onClose={onClose}>
      <div className="invite-employee">
        <button className="invite-employee__cross">
          <Icons.Cross />
        </button>
        <div className="invite-employee__title">Отправьте приглашение</div>

        {/* TODO: Добавить валидацию формы */}
        <form className="invite-employee__form">
          <Input value={email} onChange={setEmail} placeholder="Email" />

          <CheckboxSelect
            selectedValues={roles}
            options={ROLES}
            onChange={handleRolesChanged}
            placeholder="Выберите права доступа"
            allText={ROLES[0].value}
          />

          <div className="invite-employee__button">
            <Button
              onClick={(e) => {
                e.preventDefault();
                onInvite(email, roles);
              }}
            >
              Отправить приглашение
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default InviteEmployee;
