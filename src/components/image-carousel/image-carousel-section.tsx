'use client';

import 'yet-another-react-lightbox/styles.css';

import Image from 'next/image';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';

import { PrevConfData } from '@/models/models';

import NextJsImage from '../next-js-image';
import { Carousel, CarouselItem } from './carousel';

type Props = {
  data: PrevConfData;
};

export function ImageCarouselSection({ data: { conferences, sectionTitle } }: Props) {
  const [index, setIndex] = useState(-1);
  const images = conferences[0].imageUrls;
  return (
    <div className='my-16 sm:my-40'>
      <h2 className='flex justify-center mb-4'>{sectionTitle}</h2>
      <div className='w-full max-w-6xl px-6 xl:px-0'>
        <Carousel
          items={images}
          renderItem={({ item, isSnapPoint, index: i }) => (
            <CarouselItem key={item} isSnapPoint={isSnapPoint}>
              <Image
                onClick={() => setIndex(i)}
                src={item}
                key={item}
                alt='Kép korábbi konferenciáról'
                className='h-full cursor-pointer rounded-[30px]'
                height={200}
                width={300}
              />
            </CarouselItem>
          )}
        />
      </div>
      <Lightbox
        open={index > -1}
        index={index}
        close={() => setIndex(-1)}
        slides={images.map((i) => ({ src: i }))}
        render={{ slide: NextJsImage }}
      />
    </div>
  );
}
