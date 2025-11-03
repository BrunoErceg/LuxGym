import { cn } from "@utils/cn";

type ColumnsProps = {
  children: React.ReactNode;
  className?: string;
  sm?: 1 | 2 | 4;
  md?: 1 | 2 | 4;
  lg?: 1 | 2 | 4;
  gap?: "sm" | "md" | "lg";
};

function Columns({ sm, md, lg, className, gap, children }: ColumnsProps) {
  const getGapClass: any = () => {
    const size = {
      sm: "gap-4",
      md: "gap-8",
      lg: "gap-14",
    };
    return gap ? size[gap] : "";
  };
  const getGridClass: any = () => {
    const cols = {
      sm: sm ? `sm:grid-cols-${sm}` : "",
      md: md ? `md:grid-cols-${md}` : "",
      lg: lg ? `lg:grid-cols-${lg}` : "",
    };
    return `${cols.sm} ${cols.md} ${cols.lg}`;
  };
  return (
    <div className={cn(`grid`, getGapClass(), getGridClass(), className)}>
      {children}
    </div>
  );
}
export default Columns;
