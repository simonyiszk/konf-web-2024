'use client';

import 'yet-another-react-lightbox/styles.css';

import Image from 'next/image';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';

import { PrevConfData } from '@/models/models';

import NextJsImage from './next-js-image';

type Props = {
  data: PrevConfData;
};

export function ImageCarousel({ data: { conferences, sectionTitle } }: Props) {
  const [index, setIndex] = useState(-1);
  const images = conferences[0].imageUrls;
  return (
    <div className='my-40'>
      <h2 className='flex justify-center mb-4'>{sectionTitle}</h2>
      <div className='flex gap-6  w-full max-w-6xl overflow-hidden px-6 xl:px-0'>
        {images.map((imageUrl, idx) => (
          <Image
            onClick={() => setIndex(idx)}
            src={imageUrl}
            key={imageUrl}
            alt='Kép korábbi konferenciáról'
            className='h-full cursor-pointer'
            height={225}
            width={300}
          />
        ))}
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
