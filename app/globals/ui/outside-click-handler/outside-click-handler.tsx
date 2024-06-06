'use client';

import React, { useRef, useEffect } from 'react';

const useOutsideClickHandler = (
  ref: React.MutableRefObject<any>,
  onOutsideClick: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onOutsideClick();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, onOutsideClick]);
};

interface IProps {
  children: JSX.Element;
  onOutsideClick: () => void;
}

const OutsideClickHandler = ({ children, onOutsideClick }: IProps) => {
  const wrapperRef = useRef<any>(null);
  useOutsideClickHandler(wrapperRef, onOutsideClick);

  return <div ref={wrapperRef}>{children}</div>;
};

export default OutsideClickHandler;
