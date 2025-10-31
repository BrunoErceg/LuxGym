export function scrollToSection(sectionRef: React.RefObject<HTMLElement>) {
  sectionRef.current?.scrollIntoView({ behavior: "smooth" });
}
