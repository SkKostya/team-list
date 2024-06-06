'use client';
import './avatar.css';

import { useState } from 'react';
import Image from 'next/image';

import { Icons } from '../index.server';

interface IProps {
  image?: string;
}

const Avatar: React.FC<IProps> = ({ image }) => {
  const [isError, setError] = useState(false);

  return (
    <div className="avatar">
      {image && !isError ? (
        <Image
          className="avatar__image"
          src={image}
          alt="avatar"
          height={64}
          width={64}
          onError={() => setError(true)}
        />
      ) : (
        <span className="avatar__icon">
          <Icons.UserIcon />
        </span>
      )}
    </div>
  );
};

export default Avatar;
