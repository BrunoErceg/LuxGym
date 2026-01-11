import { cn } from '@/utils/cn';
import { HTMLAttributes } from 'react';

/**
 * A React component that renders a text with a white outline.
 *
 * @returns A JSX element representing the outlined text.
 */
function OutlineText({ className, children, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={cn(`text-outline white`, className)} {...props}>
      {children}
    </span>
  );
}

export default OutlineText;
