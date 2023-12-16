import clsx from 'clsx';
import { forwardRef } from 'react';
import { TbCheck } from 'react-icons/tb';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({ label, className, ...rest }, ref) => {
  ref = ref as React.MutableRefObject<HTMLInputElement>;
  const id = rest.id || Math.random().toString(36);
  return (
    <label htmlFor={id} className={clsx('gap-3 flex cursor-pointer', className)}>
      <input id={id} hidden type='checkbox' ref={ref} {...rest} />
      <div
        className={clsx('h-5 w-5 flex-shrink-0 border-white border-2 rounded-md flex items-center justify-center', {
          'bg-white text-black': rest.checked,
        })}
      >
        {rest.checked && <TbCheck />}
      </div>
      {label}
    </label>
  );
});
