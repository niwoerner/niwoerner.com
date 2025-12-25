import { cn } from "@/lib/utils";

interface ProseProps {
  children: React.ReactNode;
  className?: string;
}

export function Prose({ children, className }: ProseProps) {
  return (
    <div
      className={cn(
        "prose prose-zinc dark:prose-invert max-w-none",
        "prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-primary",
        "prose-h2:mt-10 prose-h2:text-2xl",
        "prose-h3:mt-8 prose-h3:text-xl",
        "prose-p:leading-relaxed",
        "prose-a:underline prose-a:hover:text-primary prose-a:transition-colors",
        "prose-code:rounded prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:font-mono prose-code:text-sm prose-code:before:content-none prose-code:after:content-none",
        "prose-pre:rounded-xl prose-pre:bg-muted prose-pre:p-4",
        "prose-img:rounded-xl",
        "prose-blockquote:border-l-primary",
        className
      )}
    >
      {children}
    </div>
  );
}
