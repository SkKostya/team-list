'use client';
import './employee.css';

import { useState } from 'react';

import { Tag } from '@/app/globals/ui/index.server';
import { Avatar, ContextMenu } from '@/app/globals/ui/index.client';

interface IProps {
  id: string;
  avatar?: string;
  name: string;
  email: string;
  roles: string[];
  isAdmin?: boolean;
  isAuthorized?: boolean;
  onEditRoles: (id: string) => null;
  onResentCode: (id: string) => null;
  onDelete: (id: string) => null;
}

const Employee: React.FC<IProps> = ({
  id,
  avatar,
  name,
  email,
  roles,
  isAdmin,
  isAuthorized,
  onEditRoles,
  onResentCode,
  onDelete,
}) => {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="employee">
      <div className="employee__avatar">
        <Avatar image={avatar} />
      </div>

      <div className="employee__main">
        <div className="employee__info">
          <span className="employee__name">{name}</span>
          {!isAuthorized && (
            <span className="employee__status">Не авторизован</span>
          )}
          <span className="employee__email">{email}</span>
        </div>

        <div className="employee__tags">
          {isAdmin ? (
            <Tag text="Администратор" />
          ) : (
            roles.map((role) => <Tag key={role} text={role} />)
          )}
        </div>
      </div>

      <div className="employee__menu">
        <ContextMenu
          isOpened={menuOpened}
          setIsOpened={setMenuOpened}
          linksList={[
            {
              text: 'Изменить права доступа',
              onClick: () => {
                onEditRoles(id);
                setMenuOpened(false);
              },
            },
            {
              text: 'Отправить код повторно',
              onClick: () => {
                onResentCode(id);
                setMenuOpened(false);
              },
            },
            {
              text: 'Удалить',
              onClick: () => {
                onDelete(id);
                setMenuOpened(false);
              },
              isGray: true,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Employee;
