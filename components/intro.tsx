import Link from "next/link";

export function Intro() {
  return (
    <section className="py-10">
      <div className="pl-5 border-l-2 border-primary/30 space-y-3">
        <h1 className="text-2xl font-bold tracking-tight text-primary">
          Hi, I&apos;m Nicolas.
        </h1>
        <p className="text-base text-muted-foreground">
          I&apos;m working at           <Link
            href="https://ollygarden.com"
            className="underline underline-offset-2 hover:text-primary transition-colors"
          >
            OllyGarden{" "}
          </Link>
          where I focus on building an AI agent called {" "}
          <Link
            href="https://blog.olly.garden/meet-rose-ollygardens-ai-instrumentation-agent"
            className="underline underline-offset-2 hover:text-primary transition-colors"
            >
            Rose. 
          </Link>
        </p>
        <p className="text-base text-muted-foreground">
          Besides that, I'm always looking to optimize my dev workflow by exploring new tools or building them on my own.
        </p>
        <p className="text-base text-muted-foreground">
          On this page, I'm sharing my learnings and opinions based on my practical experience. It'll be mostly focused on things related to AI, but sometimes I might also write about other topics that catch my interest. (For observability topics, check out the{" "}
          <Link
            href="https://blog.olly.garden/"
            className="underline underline-offset-2 hover:text-primary transition-colors"
          >
            OllyGarden blog
          </Link>{" "}
          or{" "}
          <Link
            href="https://www.youtube.com/@OllyGardenInc"
            className="underline underline-offset-2 hover:text-primary transition-colors"
          >
            YouTube
          </Link>
          .)
        </p>
        <p className="text-base text-muted-foreground"> 
          PS: Everything you'll read here is 100% handwritten.
        </p>
      </div>  
    </section>
  );
}
