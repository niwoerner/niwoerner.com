import { cn } from "@/lib/utils";

interface SplitSectionProps {
  children: React.ReactNode;
  className?: string;
}

export function SplitSection({ children, className }: SplitSectionProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 my-12",
        className
      )}
    >
      {children}
    </div>
  );
}

interface SplitContentProps {
  children: React.ReactNode;
  className?: string;
}

export function SplitContent({ children, className }: SplitContentProps) {
  return <div className={cn("prose-content", className)}>{children}</div>;
}

interface SplitPlaygroundProps {
  children: React.ReactNode;
  className?: string;
}

export function SplitPlayground({ children, className }: SplitPlaygroundProps) {
  return (
    <div className={cn("lg:sticky lg:top-24 lg:self-start", className)}>
      {children}
    </div>
  );
}
