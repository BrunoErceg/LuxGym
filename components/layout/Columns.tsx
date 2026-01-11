import { cn } from '@utils/cn';
import { cva, VariantProps } from 'class-variance-authority';
import { HTMLAttributes, ReactNode } from 'react';

type ColumnsProps = VariantProps<typeof columnsVariants> & HTMLAttributes<HTMLDivElement>;

const columnsVariants = cva('', {
  variants: {
    sm: {
      1: 'sm:grid-cols-1',
      2: 'sm:grid-cols-2',
      4: 'sm:grid-cols-4',
    },
    md: {
      1: 'md:grid-cols-1',
      2: 'md:grid-cols-2',
      4: 'md:grid-cols-4',
    },
    lg: {
      1: 'lg:grid-cols-1',
      2: 'lg:grid-cols-2',
      4: 'lg:grid-cols-4',
    },
    gap: {
      sm: 'gap-4',
      md: 'gap-8',
      lg: 'gap-14',
    },
  },
  defaultVariants: {
    sm: 1,
    md: 2,
    lg: 4,
    gap: 'md',
  },
});

/**
 * A React component that displays a responsive grid of columns.
 * The component is used to layout pages and sections.
 *
 * @param {number} [props.sm=1] - The number of columns on small screens.
 * @param {number} [props.md=2] - The number of columns on medium screens.
 * @param {number} [props.lg=4] - The number of columns on large screens.
 * @returns - The JSX element of the component.
 */
function Columns({ sm, md, lg, className, gap, children, ...props }: ColumnsProps) {
  return (
    <div className={cn(`grid`, columnsVariants({ sm, md, lg, gap }), className)} {...props}>
      {children}
    </div>
  );
}
export default Columns;
