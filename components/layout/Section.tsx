import { HTMLAttributes } from 'react';
import { cn } from '@utils/cn';
import { cva, VariantProps } from 'class-variance-authority';

type SectionProps = VariantProps<typeof sectionVariants> &
  HTMLAttributes<HTMLDivElement> & {
    id: string;
  };

const sectionVariants = cva('', {
  variants: {
    padding: {
      none: 'py-0',
      xs: 'py-2 md:py-5',
      sm: 'py-8 md:py-10',
      md: 'py-15 md:py-20',
      lg: 'py-10 md:py-30',
      xl: 'py-25 md:py-40',
      xxl: 'py-30 md:py-50',
    },
  },
  defaultVariants: {
    padding: 'md',
  },
});

function Section({ padding, id, className, children, ...props }: SectionProps) {
  return (
    <section className={cn(sectionVariants({ padding }), className)} id={id} {...props}>
      {children}
    </section>
  );
}

export default Section;
