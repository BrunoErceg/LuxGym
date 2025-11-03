import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { scrollToSection } from "@utils/scrollToSection";

type ArrowDownProps = {
  sectionRef: any;
};

function ArrowDown({ sectionRef }: ArrowDownProps) {
  return (
    <button onClick={() => scrollToSection(sectionRef.gym)}>
      <DotLottieReact
        src="https://lottie.host/1dac55c6-aa15-41cd-9c5f-bda4c7dd727a/SgsRGo01oy.lottie"
        loop
        autoplay
        className="color-white h-20 translate-x-[60px] translate-y-2.5 hover:cursor-pointer"
      />
    </button>
  );
}

export default ArrowDown;
