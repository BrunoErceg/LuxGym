'use client';
import { HTMLAttributes, useState } from 'react';
import { cn } from '@/utils/cn';
import Heading from '@ui/Heading';
import Typography from '@ui/Typography';

type AccordionProps = HTMLAttributes<HTMLDivElement> & {
  title: string;
  content: string;
};

/**
 * A component that renders an accordion item with a title and content.
 * When the component is clicked, it toggles the content visibility.
 *
 * @returns  A JSX element representing the accordion item.
 */
function Accordion({ title, content, className, ...props }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={cn('py-2 hover:cursor-pointer', className)}
      onClick={() => {
        setIsOpen(!isOpen);
      }}
      {...props}
    >
      <Heading level={4} className="flex justify-between">
        {title}
        <span className="font-gilory mr-3">{isOpen ? '-' : '+'}</span>
      </Heading>

      <div
        className={`grid overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="mb-3 overflow-hidden">
          <Typography>{content}</Typography>
        </div>
      </div>
      <hr className="text-light" />
    </div>
  );
}
export default Accordion;
