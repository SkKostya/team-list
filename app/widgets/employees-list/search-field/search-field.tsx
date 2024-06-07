import './search-field.css';

import { Icons } from '@/app/globals/ui/index.server';
import { Input } from '@/app/globals/ui/index.client';

interface IProps {
  searchValue: string;
  onChange: (value: string) => void;
}

const SearchField: React.FC<IProps> = ({ searchValue, onChange }) => {
  // При необходимости создать локальное состояние для поиска.
  // Функцию onChange вызывать с debounce

  return (
    <label className="search-field">
      <Input
        value={searchValue}
        onChange={onChange}
        placeholder="Поиск по Email"
      />
      <span className="search-field__icon">
        <Icons.Search />
      </span>
    </label>
  );
};

export default SearchField;
