import clsx from 'clsx';

import styles from './styles.module.css';

type Props = {
  children: React.ReactNode;
  className?: string;
  clickable?: boolean;
  disableMinHeight?: boolean;
};

function TileBase({ children, className, clickable, disableMinHeight }: Props) {
  return (
    <div
      className={clsx(
        styles.card,
        'overflow-hidden relative p-[1.5px]',
        clickable && styles['card-clickable'],
        !disableMinHeight && 'min-h-[225px]',
        className
      )}
    >
      <>{children}</>
    </div>
  );
}

type TileBodyProps = {
  children: React.ReactNode;
  className?: string;
  lessPadding?: string;
};

function TileBody({ children, className, lessPadding }: TileBodyProps) {
  return (
    <div
      className={clsx(
        styles['card-body'],
        lessPadding ? `p-${lessPadding}` : 'p-6 sm:p-10',
        'w-full h-full',
        className
      )}
    >
      {children}
    </div>
  );
}

export const Tile = TileBase as typeof TileBase & {
  Body: typeof TileBody;
};
Tile.Body = TileBody;
