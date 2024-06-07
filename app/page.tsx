'use client';

import { Employee, InviteEmployee } from './entities';

export default function Home() {
  return (
    <main>
      <InviteEmployee
        isOpened={true}
        onClose={() => null}
        onInvite={() => null}
      />

      <Employee
        id="asdf"
        avatar=""
        name="Пользователь"
        email="example@email.com"
        roles={['Модерация объявлений']}
        isAdmin={false}
        isAuthorized={false}
        onEditRoles={(id) => null}
        onResentCode={() => null}
        onDelete={() => null}
      />
    </main>
  );
}
