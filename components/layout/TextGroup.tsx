import { cn } from "@utils/cn";

type TextGroupProps = {
  centered?: true | false;
  children: React.ReactNode;
  className?: string;
};

function TextGroup({ centered = false, children, className }: TextGroupProps) {
  return (
    <div className={cn(centered == true ? "text-center" : "", className)}>
      {children}
    </div>
  );
}

export default TextGroup;
