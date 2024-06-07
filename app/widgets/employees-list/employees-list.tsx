'use client';
import './employees-list.css';

import { useEffect, useState } from 'react';

import { Button } from '@/app/globals/ui/index.client';
import {
  ChangeEmployee,
  DeleteEmployee,
  Employee,
  InviteEmployee,
  SuccessInvited,
} from '@/app/entities';
import SearchField from './search-field';

const fetchUrl =
  'https://file.notion.so/f/f/9a782e33-389d-49d2-9fb2-bb2fa36b755c/b697dfd0-4a6f-4555-bd14-60559f2a8179/users.json?id=b2eae78e-4619-4bac-8e05-6deef2d9d37b&table=block&spaceId=9a782e33-389d-49d2-9fb2-bb2fa36b755c&expirationTimestamp=1717826400000&signature=CkoN0JWw0-1rWz2PMkIY09wOYuHazpyhub29QxnL_5g&downloadName=users.json';

const EmployeesList: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  const [search, setSearch] = useState('');

  const [inviteModal, setInviteModal] = useState(false);
  const [successInvitedModal, setSuccessInvitedModal] = useState('');
  const [deleteModal, setDeleteModal] = useState(false);

  const [changeModal, setChangeModal] =
    useState<ChangeEmployeeStateInterface | null>(null);

  useEffect(() => {
    fetch(fetchUrl)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        setEmployees(data);
      });
  }, []);

  const handleEmployeeCreated = (email: string, roles: string[]) => {
    setEmployees([
      ...employees,
      {
        image: '',
        email,
        name: 'Пользователь',
        permissions: roles,
      },
    ]);

    setInviteModal(false);
    setSuccessInvitedModal(email);
  };

  const handleEmployeeChanged = (email: string, roles: string[]) => {
    const newEmployees = employees.slice().map((item) => {
      return item.email === email ? { ...item, permissions: roles } : item;
    });
    setEmployees(newEmployees);
    setChangeModal(null);
  };

  const handleEmployeeDeleted = (email: string) => {
    const newEmployees = employees
      .slice()
      .filter((item) => item.email !== email);
    setEmployees(newEmployees);
    setDeleteModal(true);
  };

  return (
    <>
      <div className="employees-list">
        <div className="employees-list__header">
          <h1 className="employees-list__title">Команда</h1>

          <div className="employees-list__search">
            <SearchField searchValue={search} onChange={setSearch} />
          </div>

          <Button
            buttonClass="employees-list__add-button"
            size="small"
            onClick={() => setInviteModal(true)}
          >
            Добавить пользователя
          </Button>
        </div>

        <div className="employees-list__wrapper">
          {employees.map((item) => (
            <div key={item.email} className="employees-list__item">
              <Employee
                id={item.email}
                avatar={item.image}
                name={item.name}
                email={item.email}
                roles={item.permissions}
                isAdmin={item.permissions.includes('Администратор')}
                isAuthorized={true}
                onEditRoles={() =>
                  setChangeModal({ email: item.email, roles: item.permissions })
                }
                onResentCode={() => null}
                onDelete={handleEmployeeDeleted}
              />
            </div>
          ))}
        </div>
      </div>

      <InviteEmployee
        isOpened={inviteModal}
        onClose={() => setInviteModal(false)}
        onInvite={handleEmployeeCreated}
      />

      <SuccessInvited
        email={successInvitedModal}
        isOpened={!!successInvitedModal}
        onClose={() => setSuccessInvitedModal('')}
      />

      <ChangeEmployee
        email={changeModal?.email || ''}
        initialRoles={changeModal?.roles || []}
        isOpened={!!changeModal}
        onClose={() => setChangeModal(null)}
        onChange={handleEmployeeChanged}
      />

      <DeleteEmployee
        isOpened={deleteModal}
        onClose={() => setDeleteModal(false)}
      />
    </>
  );
};

export default EmployeesList;

interface Employee {
  email: string;
  image: string;
  name: string;
  permissions: string[];
}

interface ChangeEmployeeStateInterface {
  email: string;
  roles: string[];
}
