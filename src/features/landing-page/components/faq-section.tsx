import { LANDING_PAGE_CONTENT } from "@/constants/landing-page"

export function FaqSection() {
  const { faqSection, faq } = LANDING_PAGE_CONTENT

  return (
    <section 
      className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-10" 
      aria-labelledby="faq-title"
    >
      <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--brand-coral)]/70">
            {faqSection.eyebrow}
          </p>
          <h2 id="faq-title" className="mt-3 font-serif text-4xl text-white">
            {faqSection.title}
          </h2>
        </div>

        <div className="divide-y divide-white/10">
          {faq.map(({ question, answer }) => (
            <details className="group py-5" key={question}>
              <summary className="flex cursor-pointer items-center justify-between font-serif text-xl text-white marker:hidden [&::-webkit-details-marker]:hidden">
                <span>{question}</span>
                <span 
                  className="ml-4 text-[var(--brand-coral)] transition-transform group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-500">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}