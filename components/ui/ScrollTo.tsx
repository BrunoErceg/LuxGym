import { scrollToSection } from "@utils/scrollToSection";

function ScrollTo({
  children,
  section,
}: {
  children: string;
  section: React.RefObject<HTMLElement>;
}) {
  return (
    <a
      onClick={() => scrollToSection(section)}
      className="underline-animation relative text-xl"
    >
      {children}
    </a>
  );
}

export default ScrollTo;
