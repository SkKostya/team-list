'use client';
import './checkbox.css';

interface IProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  text: string;
  isGray?: boolean;
}

const Checkbox: React.FC<IProps> = ({ checked, onChange, text, isGray }) => {
  return (
    <label className="checkbox">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="checkbox__field"
      />

      <span className="checkbox__view">
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.75646 1.00405C6.8947 0.871725 7.07867 0.798572 7.26954 0.800024C7.46041 0.801476 7.64325 0.87742 7.77949 1.01183C7.91573 1.14624 7.9947 1.3286 7.99974 1.52044C8.00479 1.71228 7.93551 1.89858 7.80653 2.04004L3.89085 6.96349C3.82352 7.03641 3.74226 7.09492 3.65192 7.13554C3.56158 7.17615 3.46403 7.19803 3.36509 7.19988C3.26614 7.20172 3.16785 7.18348 3.07608 7.14626C2.98431 7.10903 2.90094 7.05358 2.83097 6.98323L0.234262 4.37252C0.161948 4.30477 0.103946 4.22307 0.063718 4.1323C0.0234896 4.04153 0.00185823 3.94354 0.000114546 3.84418C-0.00162914 3.74482 0.0165507 3.64613 0.053569 3.55398C0.0905874 3.46184 0.145686 3.37814 0.215578 3.30787C0.28547 3.2376 0.368724 3.1822 0.460372 3.14499C0.552021 3.10777 0.650187 3.08949 0.749014 3.09124C0.847841 3.093 0.945304 3.11474 1.03559 3.15519C1.12588 3.19564 1.20713 3.25395 1.27452 3.32665L3.32951 5.39174L6.73782 1.02575C6.74395 1.01816 6.7505 1.01091 6.75744 1.00405H6.75646Z"
            fill="#F8F8F8"
          />
        </svg>
      </span>

      <span className={`checkbox__text ${isGray ? 'checkbox__text--dim' : ''}`}>
        {text}
      </span>
    </label>
  );
};

export default Checkbox;
