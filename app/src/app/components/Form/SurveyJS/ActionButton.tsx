import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface ActionButtonProp extends React.ComponentProps<any> {
  text: string;
  onClick: () => void;
  canRender: boolean;
  className?: string;
  textColor?: string;
  backgroundColor?: string;
}

export function ActionButton({
  text,
  onClick,
  canRender,
  className,
  textColor = '#ffffff',
  backgroundColor = '#246ABC',
}: ActionButtonProp) {
  if (!canRender) return null;

  const buttonStyle = {
    background: backgroundColor,
    color: textColor,
  };

  return (
    <>
      <button
        className={twMerge(
          'focus:outline-none focus:ring-2 focus:opacity-80 hover:opacity-100 hover:shadow-md transition duration-300 ease-in-out opacity-80  text-base px-8 py-3 rounded-md shadow-md  text-white',
          className,
        )}
        onClick={onClick}
        style={buttonStyle}
      >
        {text}
      </button>
    </>
  );
}
