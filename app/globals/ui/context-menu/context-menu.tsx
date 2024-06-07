'use client';
import './context-menu.css';

import React from 'react';

import { Icons } from '../index.server';
import { OutsideClickHandler } from '../index.client';

interface LinkItemInterface {
  text: string;
  onClick: () => void;
  isGray?: boolean;
}

interface IProps {
  isOpened: boolean;
  setIsOpened: (value: boolean) => void;
  linksList: LinkItemInterface[];
}

const ContextMenu = ({ isOpened, setIsOpened, linksList }: IProps) => {
  return (
    <OutsideClickHandler onOutsideClick={() => isOpened && setIsOpened(false)}>
      <div className="context-menu">
        <button
          onClick={() => setIsOpened(!isOpened)}
          className="context-menu__icon"
        >
          <Icons.ThreeDots />
        </button>

        <div
          className={`context-menu__dropdown ${
            isOpened ? 'context-menu__dropdown--opened' : ''
          }`}
        >
          <ul className="context-menu__links-container">
            {linksList.map((item) => (
              <li
                key={item.text}
                onClick={item.onClick}
                className={`context-menu__item ${
                  item.isGray ? 'context-menu__item--gray' : ''
                }`}
              >
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default ContextMenu;
