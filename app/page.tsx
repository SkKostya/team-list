import { Avatar } from './globals/ui/index.client';
import { Tag } from './globals/ui/index.server';

export default function Home() {
  return (
    <main>
      <Avatar image={'/images/avatar.jpg'} />
      <Avatar />
      <Tag text="Модерация объявлений" />
      <Tag text="Администратор" color="blue" />
    </main>
  );
}
