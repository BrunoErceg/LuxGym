import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { cn } from '@utils/cn';
import { HTMLAttributes } from 'react';

type NavIconProps = HTMLAttributes<HTMLAnchorElement> & {
  icon: IconProp;
  link: string;
};

/**
 * A component that renders a navigation icon with a given icon and link.
 *
 * @param {IconProp} icon - The icon to be displayed.
 * @param {string} link - The link to open when the icon is clicked.
 * @returns A JSX element representing the navigation icon.
 */
function NavIcon({ icon, link, className, ...props }: NavIconProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" {...props}>
      <FontAwesomeIcon
        icon={icon}
        className={cn(
          `hover:text-primary text-lg transition-colors duration-200 hover:cursor-pointer md:text-2xl`,
          className,
        )}
      />
    </a>
  );
}

export default NavIcon;
