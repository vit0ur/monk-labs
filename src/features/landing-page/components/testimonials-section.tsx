import { Quote } from "lucide-react"
import { LANDING_PAGE_CONTENT } from "@/constants/landing-page"

export function TestimonialsSection() {
  const { socialProof, testimonials } = LANDING_PAGE_CONTENT

  return (
    <section 
      className="relative z-10 border-y border-white/10 bg-white/[0.02] px-6 py-24 lg:px-10 lg:py-32" 
      aria-labelledby="testimonials-title"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--brand-coral)]/70">
            {socialProof.eyebrow}
          </p>
          <h2 id="testimonials-title" className="mt-3 font-serif text-4xl leading-tight text-white sm:text-5xl">
            {socialProof.title}
          </h2>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {testimonials.map(({ quote, author, role, company }) => (
            <figure 
              className="rounded-2xl border border-white/10 bg-white/[0.025] p-7 sm:p-9" 
              key={`${author}-${company}`}
            >
              <Quote className="size-6 text-[var(--brand-coral)]" aria-hidden="true" />
              <blockquote className="mt-8 font-serif text-2xl leading-tight text-white">
                "{quote}"
              </blockquote>
              <figcaption className="mt-8 text-sm text-zinc-500">
                <span className="block text-zinc-300">{author}</span>
                <span>{role} · {company}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}