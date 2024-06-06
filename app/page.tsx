'use client';

import { Employee } from './entities';
import { CheckboxSelect } from './globals/ui/index.client';

export default function Home() {
  return (
    <main>
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

      <CheckboxSelect
        selectedValues={[
          { key: 'Модерация объявлений', value: 'Модерация объявлений' },
          { key: 'Обращения клиентов', value: 'Обращения клиентов' },
          { key: 'Аналитика', value: 'Аналитика' },
          { key: 'Акции', value: 'Акции' },
        ]}
        options={[
          { key: 'Все', value: 'Все' },
          { key: 'Модерация объявлений', value: 'Модерация объявлений' },
          { key: 'Блог', value: 'Блог' },
          { key: 'Тех. поддержка', value: 'Тех. поддержка' },
          { key: 'Обращения клиентов', value: 'Обращения клиентов' },
          { key: 'Аналитика', value: 'Аналитика' },
          { key: 'Акции', value: 'Акции' },
        ]}
        onChange={() => null}
        placeholder="Выберите права доступа"
        allText="All"
      />
    </main>
  );
}
