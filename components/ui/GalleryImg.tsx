import { PhotoView } from 'react-photo-view';
import { cn } from '@utils/cn';
import Image, { StaticImageData } from 'next/image';
import { HTMLAttributes } from 'react';
type GalleryImgProps = HTMLAttributes<HTMLDivElement> & {
  image: StaticImageData;
  alt: string;
};
/**
 * A component that displays an image from a PhotoView in a gallery.
 * It wraps the image in a PhotoView and provides a hover effect.
 * The image is displayed with object-cover and is responsive.
 * The component is used to display images in the gallery section.
 */
function GalleryImg({ image, alt, className, ...props }: GalleryImgProps) {
  return (
    <div
      className={cn(
        'relative col-span-1 row-span-1 h-full object-cover hover:cursor-pointer',
        className,
      )}
      {...props}
    >
      <PhotoView src={image.src}>
        <div className={`md: relative h-70 w-full overflow-hidden object-cover lg:h-full`}>
          <Image
            src={image}
            className={`object-cover duration-200 ease-in-out hover:scale-110`}
            fill
            sizes="80vw"
            alt={alt}
          />
        </div>
      </PhotoView>
    </div>
  );
}

export default GalleryImg;
