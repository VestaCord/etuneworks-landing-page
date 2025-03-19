import type { ReactNode } from 'react';
import React, { useState } from 'react';

type IDropdownProps = {
  children: ReactNode;
  title: string;
};

function Dropdown(props: IDropdownProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mb-4 flex w-full flex-col items-center justify-center">
      <button
        className="flex w-5/6 items-center justify-between bg-blue-700 p-4 hover:bg-etune-blue"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl font-bold">{props.title}</span>
        <svg
          className={`size-5 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Dropdown Icon</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      {isOpen && <div className="mt-2 w-full">{props.children}</div>}
    </div>
  );
}

export { Dropdown };
