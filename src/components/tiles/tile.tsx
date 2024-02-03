import clsx from 'clsx';

import styles from './styles.module.css';

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

function TileBase({ children, className }: Props) {
  return (
    <div className={clsx(styles.card, 'overflow-hidden relative p-[1.5px] min-h-[225px]', className)}>
      <>{children}</>
    </div>
  );
}

type TileBodyProps = {
  children: React.ReactNode;
  className?: string;
  hidePadding?: boolean;
};

function TileBody({ children, className, hidePadding = false }: TileBodyProps) {
  return (
    <div className={clsx(styles['card-body'], hidePadding ? 'p-2' : 'p-10', 'w-full h-full', className)}>
      {children}
    </div>
  );
}

export const Tile = TileBase as typeof TileBase & {
  Body: typeof TileBody;
};
Tile.Body = TileBody;
