'use client';
import './button.css';

type Sizes = 'small' | 'medium';

interface IProps {
  text: string;
  onClick: () => void;
  size?: Sizes;
}

const buttonSizes: Record<Sizes, string> = {
  small: 'button--small',
  medium: '',
};

const Button: React.FC<IProps> = ({ text, onClick, size = 'medium' }) => {
  return (
    <button onClick={onClick} className={`button ${buttonSizes[size]}`}>
      {text}
    </button>
  );
};

export default Button;
