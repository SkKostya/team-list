'use client';
import './home.css';

import { useState } from 'react';

import { MainMenu } from './entities';
import { EmployeesList } from './widgets';

export default function Home() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <main className="home">
      <aside className="home__menu">
        <MainMenu isMenuOpened={isMenuOpened} onCloseMenu={setIsMenuOpened} />
      </aside>

      <div className="home__content">
        <EmployeesList onOpenMenu={setIsMenuOpened} />
      </div>
    </main>
  );
}
