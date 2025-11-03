import { cn } from "@utils/cn";

type StackProps = {
  children: React.ReactNode;
  className?: string;
  direction?: "col" | "row";
  gap?: "none" | "sm" | "md" | "lg";
};

function Stack({
  direction = "row",
  gap = "md",
  className,
  children,
}: StackProps) {
  const getGapClass: any = () => {
    const size = {
      none: "",
      sm: "gap-2",
      md: "gap-4",
      lg: "gap-8",
    };
    return gap ? size[gap] : "";
  };
  return (
    <div className={cn(`flex flex-${direction} ${getGapClass()}`, className)}>
      {children}
    </div>
  );
}

export default Stack;
