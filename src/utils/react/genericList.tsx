import React from 'react';

interface IItem {
  id: string;
  text: string;
  onClick: (id: string) => void;
  image?: React.ReactNode;
  className?: string;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string;
}

interface IGenericListProps {
  list: IItem[];
}

export function GenericList({list}: IGenericListProps) {
  return (
    <>
      {list.map(({As = 'div', text, image, onClick, className, id, href}) => (
        <As
          className={className}
          onClick={() => onClick(text)}
          key={id}
          href={href}
        >
          {image} {text}
        </As>
      ))}
    </>
  );
}
