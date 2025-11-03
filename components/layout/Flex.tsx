import { cn } from "@utils/cn";

type FlexProps = {
  direction?: "row" | "col";
  justify?: "start" | "center" | "end" | "between" | "around";
  align?: "start" | "center" | "end" | "stretch";
  children: React.ReactNode;
  className?: string;
};

function Flex({
  direction = "row",
  justify = "start",
  align = "start",
  children,
  className,
}: FlexProps) {
  return (
    <div
      className={cn(
        `flex-${direction} justify-${justify} items-${align} flex`,
        className
      )}
    >
      {children}
    </div>
  );
}

export default Flex;
