'use client';
import { MouseEvent } from 'react';
import './button.css';

type Sizes = 'small' | 'medium';

interface IProps {
  children: React.ReactElement | string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  size?: Sizes;
}

const buttonSizes: Record<Sizes, string> = {
  small: 'button--small',
  medium: '',
};

const Button: React.FC<IProps> = ({ children, onClick, size = 'medium' }) => {
  return (
    <button onClick={onClick} className={`button ${buttonSizes[size]}`}>
      {children}
    </button>
  );
};

export default Button;
