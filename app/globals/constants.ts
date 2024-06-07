export interface RolesListInterface {
  key: string;
  value: string;
}

export const ROLES: RolesListInterface[] = [
  { key: 'Все', value: 'Все' },
  { key: 'Модерация объявлений', value: 'Модерация объявлений' },
  { key: 'Блог', value: 'Блог' },
  { key: 'Тех. поддержка', value: 'Тех. поддержка' },
  { key: 'Обращения клиентов', value: 'Обращения клиентов' },
  { key: 'Аналитика', value: 'Аналитика' },
  { key: 'Акции', value: 'Акции' },
];
