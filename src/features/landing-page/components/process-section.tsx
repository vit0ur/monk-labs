import { LANDING_PAGE_CONTENT } from "@/constants/landing-page"

export function ProcessSection() {
  const { process } = LANDING_PAGE_CONTENT

  return (
    <section 
      id="process" 
      className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32" 
      aria-labelledby="process-title"
    >
      <div className="mb-12 max-w-2xl">
        <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--brand-coral)]/70">
          {process.eyebrow}
        </p>
        <h2 id="process-title" className="mt-3 font-serif text-4xl leading-tight text-white sm:text-5xl">
          {process.title}
        </h2>
        <p className="mt-5 text-sm leading-7 text-zinc-500">
          {process.description}
        </p>
      </div>

      <ol className="grid gap-3 md:grid-cols-4">
        {process.steps.map(({ number, icon: Icon, title, copy }) => (
          <li key={number}>
            <article className="border-t border-white/15 pt-5">
              <div className="flex items-center justify-between">
                <Icon className="size-5 text-[var(--brand-coral)]" aria-hidden="true" />
                <span className="font-mono text-xs text-zinc-600">{number}</span>
              </div>
              <h3 className="mt-8 font-serif text-xl text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-500">{copy}</p>
            </article>
          </li>
        ))}
      </ol>
    </section>
  )
}