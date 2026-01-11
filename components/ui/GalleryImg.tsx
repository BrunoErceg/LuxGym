import { PhotoView } from 'react-photo-view';
import { cn } from '@utils/cn';
import Image, { StaticImageData } from 'next/image';
type GalleryImgProps = {
  image: StaticImageData;
  alt: string;
  className?: string;
};
function GalleryImg({ image, alt, className }: GalleryImgProps) {
  return (
    <div
      className={cn(
        'relative col-span-1 row-span-1 h-full object-cover hover:cursor-pointer',
        className,
      )}
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
