'use client';
import './main-menu.css';

import Link from 'next/link';
import Image from 'next/image';

import { Icons } from '@/app/globals/ui/index.server';

import { MENU } from './menu-array';

interface IProps {
  isMenuOpened: boolean;
  onCloseMenu: (opened: false) => void;
}

// Брать информацию о пользователе с бэкенда
const user = {
  image: '/images/avatar.jpg',
  name: 'Артем Иванов',
  role: 'Собственник',
};

const MainMenu: React.FC<IProps> = ({ isMenuOpened, onCloseMenu }) => {
  // Отработать выход из системы
  const handleExit = () => {};

  return (
    <div
      onClick={() => onCloseMenu(false)}
      className={`main-menu-wrapper ${
        isMenuOpened ? 'main-menu-wrapper--opened' : ''
      }`}
    >
      <div onClick={(e) => e.stopPropagation()} className="main-menu">
        <Image
          className="main-menu__logo"
          src={'/images/logo.png'}
          alt="logo"
          width={22.47}
          height={34}
        />

        <button
          onClick={() => onCloseMenu(false)}
          className="main-menu__burger"
        >
          <Icons.BurgerMenu />
        </button>

        <div className="main-menu__avatar-container">
          <Image
            className="main-menu__avatar"
            src={user.image}
            alt="logo"
            width={60}
            height={60}
          />

          <div className="main-menu__user">
            <b>{user.name}</b>
            <span>{user.role}</span>
          </div>
        </div>

        <ul className="main-menu__list">
          {MENU.map((item) => (
            <li key={item.link} className="main-menu__item">
              <Link href={item.link} className="main-menu__link">
                {item.icon()} <span>{item.title}</span>
              </Link>
            </li>
          ))}

          <li className="main-menu__item">
            <button onClick={handleExit} className="main-menu__link">
              <Icons.Exit />
              <span style={{ color: '#FF9E90' }}>Выйти</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainMenu;
