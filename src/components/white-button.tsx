import { MouseEventHandler, PropsWithChildren } from 'react';

type Props = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
} & PropsWithChildren;

export function WhiteButton({ onClick, children, disabled = false }: Props) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className='bg-white text-xl rounded-lg font-bold py-2 px-4 text-black hover:bg-gray-300 disabled:bg-gray-500 disabled:cursor-not-allowed'
    >
      {children}
    </button>
  );
}
