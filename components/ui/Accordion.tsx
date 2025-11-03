import { useState } from "react";

type AccordionProps = {
  title: string;
  content: string;
};

function Accordion({ title, content }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="py-2 hover:cursor-pointer"
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <h4 className="flex justify-between">
        {title}
        <span className="font-gilory mr-3">{isOpen ? "-" : "+"}</span>
      </h4>

      <div
        className={`grid overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="mb-3 overflow-hidden">
          <p className="text-light-dark">{content}</p>
        </div>
      </div>
      <hr className="text-light" />
    </div>
  );
}
export default Accordion;
