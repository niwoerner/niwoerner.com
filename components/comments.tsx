"use client";

import Giscus from "@giscus/react";
import { useTheme } from "next-themes";

interface CommentsProps {
  slug: string;
}

export function Comments({ slug }: CommentsProps) {
  const { resolvedTheme } = useTheme();

  return (
    <div className="mt-12">
      <Giscus
        id="comments"
        repo="niwoerner/niwoerner.com"
        repoId="R_kgDOQuPJzA"
        category="Blog Comments"
        categoryId="DIC_kwDOQuPJzM4C0O4m"
        mapping="specific"
        term={slug}
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme={resolvedTheme === "dark" ? "dark" : "light"}
        lang="en"
        loading="lazy"
      />
    </div>
  );
}
