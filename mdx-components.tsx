import type { MDXComponents } from "mdx/types";
import { SplitSection, SplitContent, SplitPlayground } from "@/components/split-section";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    SplitSection,
    SplitContent,
    SplitPlayground,
    ...components,
  };
}
