import Image, { ImageProps } from 'next/image';
import Link from 'next/link';

interface KirDevLogoProps extends Omit<ImageProps, 'src' | 'alt'> {
  variant?: 'light' | 'dark';
}

export function KirDevLogo({ variant, height, width, ...props }: KirDevLogoProps) {
  const src = variant === 'light' ? '/img/pbkd-light.svg' : '/img/pbkd-dark.svg';
  return (
    <Link href='https://kir-dev.hu'>
      <Image width={height ?? 200} height={width ?? 50} src={src} alt='Powered by Kir-Dev' {...props} />
    </Link>
  );
}
