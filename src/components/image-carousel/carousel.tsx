import React, { CSSProperties } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useSnapCarousel } from 'react-snap-carousel';

const styles = {
  root: {},
  scroll: {
    scrollSnapType: 'x mandatory',
  },
  item: {
    flexShrink: 0,
  },
  itemSnapPoint: {
    scrollSnapAlign: 'start',
  },
  nextPrevButton: {},
  nextPrevButtonDisabled: { opacity: 0.3 },
} satisfies Record<string, CSSProperties>;

interface CarouselProps<T> {
  readonly items: T[];
  readonly renderItem: (props: CarouselRenderItemProps<T>) => React.ReactElement<CarouselItemProps>;
}

interface CarouselRenderItemProps<T> {
  readonly item: T;
  readonly isSnapPoint: boolean;
  readonly index: number;
}

export const Carousel = <T,>({ items, renderItem }: CarouselProps<T>) => {
  const { scrollRef, pages, activePageIndex, prev, next, snapPointIndexes } = useSnapCarousel();
  return (
    <div>
      <div className='flex justify-center items-center gap-4 mb-4' aria-hidden>
        <FaArrowLeft
          className={`${activePageIndex === 0 ? 'opacity-30' : ''} cursor-pointer text-3xl select-none`}
          onClick={() => prev()}
        />
        <FaArrowRight
          className={`${activePageIndex === pages.length - 1 ? 'opacity-30' : ''} cursor-pointer text-3xl select-none`}
          onClick={() => next()}
        />
      </div>
      <ul className='relative flex gap-4 overflow-hidden snap-x' ref={scrollRef}>
        {items.map((item, i) =>
          renderItem({
            item,
            isSnapPoint: snapPointIndexes.has(i),
            index: i,
          })
        )}
      </ul>
    </div>
  );
};

interface CarouselItemProps {
  readonly isSnapPoint: boolean;
  readonly children?: React.ReactNode;
}

export const CarouselItem = ({ isSnapPoint, children }: CarouselItemProps) => (
  <li
    style={{
      ...styles.item,
      ...(isSnapPoint ? styles.itemSnapPoint : {}),
    }}
  >
    {children}
  </li>
);
