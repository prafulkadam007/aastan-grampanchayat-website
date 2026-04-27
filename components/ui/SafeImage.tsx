/* eslint-disable jsx-a11y/alt-text */
import Image, { type ImageProps } from 'next/image';

type RequiredAlt = Omit<ImageProps, 'alt'> & { alt: string };

export function SafeImage(props: RequiredAlt) {
  if (!props.alt) {
    throw new Error('SafeImage requires a non-empty alt prop. Use alt="" only for decorative images.');
  }
  return <Image {...props} />;
}
