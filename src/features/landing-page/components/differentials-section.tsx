import { LANDING_PAGE_CONTENT } from "@/constants/landing-page"

export function DifferentialsSection() {
  const { differentials } = LANDING_PAGE_CONTENT

  return (
    <section 
      id="differentials" 
      className="relative z-10 border-y border-white/10 bg-white/[0.02] px-6 py-24 lg:px-10 lg:py-32" 
      aria-labelledby="differentials-title"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--brand-coral)]/70">
            {differentials.eyebrow}
          </p>
          <h2 id="differentials-title" className="mt-3 font-serif text-4xl leading-tight text-white sm:text-5xl">
            {differentials.title}
          </h2>
          <p className="mt-5 text-sm leading-7 text-zinc-500">
            {differentials.description}
          </p>
        </div>

        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.items.map(({ icon: Icon, title, copy }) => (
            <article key={title}>
              <Icon className="size-6 text-[var(--brand-coral)]" aria-hidden="true" />
              <h3 className="mt-5 font-serif text-xl text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-500">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}