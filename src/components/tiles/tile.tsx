import clsx from 'clsx';

import styles from './styles.module.css';

type Props = {
  children: React.ReactNode;
  className?: string;
  clickable?: boolean;
};

function TileBase({ children, className, clickable }: Props) {
  return (
    <div
      className={clsx(
        styles.card,
        'overflow-hidden relative p-[1.5px] min-h-[225px]',
        clickable && styles['card-clickable'],
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
  padding?: string;
};

function TileBody({ children, className, padding = '10' }: TileBodyProps) {
  return <div className={clsx(styles['card-body'], `p-${padding}`, 'w-full h-full', className)}>{children}</div>;
}

export const Tile = TileBase as typeof TileBase & {
  Body: typeof TileBody;
};
Tile.Body = TileBody;
