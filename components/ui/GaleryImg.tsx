import { PhotoView } from "react-photo-view";
import { cn } from "@utils/cn";
import { easeInOut, motion } from "framer-motion";

type GaleryImgProps = {
  src: string;
  alt?: string;
  className?: string;
};
function GaleryImg({ src, alt, className }: GaleryImgProps) {
  return (
    <div
      className={cn(
        "col-span-1 row-span-1 object-cover hover:cursor-pointer",
        className
      )}
    >
      <PhotoView src={src}>
        <div className={`h-full w-full overflow-hidden object-cover`}>
          <motion.img
            initial={{ scale: 1.05 }}
            whileHover={{
              scale: 1.1,
              transition: {
                duration: 0.2,
                ease: easeInOut,
                type: "tween",
              },
            }}
            src={src}
            className={`h-full w-full overflow-hidden object-cover`}
            alt={alt}
          />
        </div>
      </PhotoView>
    </div>
  );
}

export default GaleryImg;
