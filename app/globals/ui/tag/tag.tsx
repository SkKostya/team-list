import './tag.css';

type Color = 'base' | 'blue';

interface IProps {
  text: string;
  color?: Color;
}

const colorClass: Record<Color, string> = {
  base: '',
  blue: 'tag--blue',
};

const Tag: React.FC<IProps> = ({ text, color = 'base' }) => {
  return <span className={`tag ${colorClass[color]}`}>{text}</span>;
};

export default Tag;
