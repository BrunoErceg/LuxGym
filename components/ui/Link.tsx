import { cn } from '@utils/cn';
import { HTMLAttributes } from 'react';

type LinkProps = HTMLAttributes<HTMLAnchorElement> & {
  link?: string;
};

/**
 * A React component that renders a link with an underline animation.
 *
 * @returns A JSX element representing the link.
 */
function Link({ link, children, className }: LinkProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(`underline-animation`, className)}
    >
      {children}
    </a>
  );
}

export default Link;
