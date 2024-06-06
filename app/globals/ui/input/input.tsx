'use client';
import './input.css';

interface IProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

const Input: React.FC<IProps> = ({ placeholder, value, onChange }) => {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="input"
    />
  );
};

export default Input;
