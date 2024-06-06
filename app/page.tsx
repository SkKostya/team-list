'use client';

import { CheckboxSelect } from './globals/ui/index.client';

export default function Home() {
  return (
    <main>
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
