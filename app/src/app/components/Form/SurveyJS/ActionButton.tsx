import React from 'react';
import { clsx } from 'clsx';

export interface ActionButtonProp extends React.ComponentProps<any> {
  text: string;
  onClick: () => void;
  canRender: boolean;
  className?: string;
}

export function ActionButton({
  text,
  onClick,
  canRender,
  className,
}: ActionButtonProp) {
  if (!canRender) return null;

  return (
    <button
      className={clsx(
        `focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 hover:bg-teal-600 hover:shadow-md transition duration-300 ease-in-out text-base px-8 py-3 rounded-md shadow-md bg-teal-500 text-white`,
        className,
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
