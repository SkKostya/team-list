'use client';
import './checkbox-select.css';

import { useState } from 'react';

import { Checkbox, OutsideClickHandler } from '../index.client';

interface IOption {
  key: string;
  value: string;
}

interface IProps {
  selectedValues: IOption[];
  options: IOption[];
  onChange: (option: IOption) => void;
  placeholder: string;
  allText?: string;
}

const CheckboxSelect: React.FC<IProps> = ({
  selectedValues,
  options,
  onChange,
  placeholder,
  allText = 'Все',
}) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <OutsideClickHandler onOutsideClick={() => setIsOpened(false)}>
      <div className="checkbox-select">
        <div
          className="checkbox-select__field"
          onClick={() => setIsOpened(!isOpened)}
        >
          <div className="checkbox-select__value">
            {selectedValues.length === 0 ? (
              <span className="checkbox-select__placeholder">
                {placeholder}
              </span>
            ) : (
              <span className="checkbox-select__text">
                {selectedValues.length === options.length
                  ? allText
                  : selectedValues.reduce((res, option) => {
                      if (res) res += `, ${option.value}`;
                      else res = option.value;
                      return res;
                    }, '')}
              </span>
            )}
          </div>

          <span className="checkbox-select__arrow">
            <svg
              width="12"
              height="9"
              viewBox="0 0 12 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.00006 1.86407L5.86401 6.72803L10.728 1.86407"
                stroke="#C1C1CB"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </div>

        <ul
          className={`checkbox-select__dropdown ${
            isOpened ? 'checkbox-select__dropdown--opened' : ''
          }`}
        >
          {options.map((item) => (
            <li key={item.key} className="checkbox-select__item">
              <Checkbox
                checked={selectedValues.some(
                  (selected) => selected.key === item.key
                )}
                onChange={() => onChange(item)}
                text={item.value}
              />
            </li>
          ))}
        </ul>
      </div>
    </OutsideClickHandler>
  );
};

export default CheckboxSelect;
