import { cn } from "@utils/cn";

type LinkProps = {
  link?: string;
  children: React.ReactNode;
  className?: string;
};

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
