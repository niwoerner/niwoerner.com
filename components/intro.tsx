export function Intro() {
  return (
    <section className="py-16">
      <div className="pl-6 border-l-2 border-primary/30 space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-primary">
          Hi, I&apos;m Nicolas.
        </h1>
        <p className="text-xl text-muted-foreground">
          I&apos;m working at{" "}
          <a
            href="https://ollygarden.com"
            className="text-foreground underline underline-offset-2 hover:text-primary"
          >
            OllyGarden
          </a>
          , where I focus on building{" "}
          <a
            href="https://blog.olly.garden/meet-rose-ollygardens-ai-instrumentation-agent"
            className="text-foreground underline underline-offset-2 hover:text-primary"
          >
            Rose
          </a>
          , an AI agent designed to facilitate source code instrumentation with
          OpenTelemetry.
        </p>
        <p className="text-xl text-muted-foreground">
          Additionally, I&apos;m passionate about optimizing my development
          workflow by experimenting with new tools or building my own.
        </p>
        <p className="text-xl text-muted-foreground">
          On this page, I&apos;ll capture my learnings and opinions based on my
          practical experience with the goal of spreading knowledge and sharing
          my thoughts. (Everything handwritten!)
        </p>
      </div>
    </section>
  );
}
