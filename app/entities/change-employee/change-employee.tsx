'use client';
import './change-employee.css';

import { useState } from 'react';

import { Button, CheckboxSelect, Modal } from '@/app/globals/ui/index.client';
import { Icons } from '@/app/globals/ui/index.server';

import { ROLES, RolesListInterface } from '../../globals/constants';

interface IProps {
  email: string;
  initialRoles: RolesListInterface[];
  isOpened: boolean;
  onClose: () => void;
  onChange: (email: string, roles: RolesListInterface[]) => void;
}

const ALL = 'Все';

const ChangeEmployee: React.FC<IProps> = ({
  email,
  initialRoles,
  isOpened,
  onClose,
  onChange,
}) => {
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
      <div className="change-employee">
        <button className="change-employee__cross">
          <Icons.Cross />
        </button>
        <div className="change-employee__title">Изменение прав</div>

        {/* TODO: Добавить валидацию формы */}
        <form className="change-employee__form">
          <CheckboxSelect
            selectedValues={roles}
            options={ROLES}
            onChange={handleRolesChanged}
            placeholder="Выберите права доступа"
            allText={ROLES[0].value}
          />

          <div className="change-employee__button">
            <Button
              onClick={(e) => {
                e.preventDefault();
                onChange(email, roles);
              }}
            >
              Изменить права
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ChangeEmployee;
