import Image from 'next/image';
import {
  isImageFitCover,
  isImageSlide,
  RenderSlideProps,
  SlideImage,
  useLightboxProps,
} from 'yet-another-react-lightbox';

function isNextJsImage(slide: SlideImage) {
  return isImageSlide(slide) && typeof slide.width === 'number' && typeof slide.height === 'number';
}

export default function NextJsImage({ slide, rect }: RenderSlideProps<SlideImage>) {
  const { imageFit } = useLightboxProps().carousel;
  const cover = isImageSlide(slide) && isImageFitCover(slide, imageFit);

  if (!isNextJsImage(slide)) return undefined;

  const width = !cover
    ? Math.round(Math.min(rect.width, (rect.height / (slide?.height || 1)) * (slide?.width || 1)))
    : rect.width;

  const height = !cover
    ? Math.round(Math.min(rect.height, (rect.width / (slide?.width || 1)) * (slide?.height || 1)))
    : rect.height;

  return (
    <div style={{ position: 'relative', width, height }}>
      <Image
        fill
        alt=''
        src={slide.src}
        loading='eager'
        draggable={false}
        style={{ objectFit: cover ? 'cover' : 'contain' }}
        sizes={`${Math.ceil((width / window.innerWidth) * 100)}vw`}
      />
    </div>
  );
}
