import { LANDING_PAGE_CONTENT } from "@/constants/landing-page"

export function FleetStatsSection() {
  return (
    <section 
      className="relative z-10 border-y border-white/10 bg-white/[0.02]" 
      aria-label="Diferenciais operacionais"
    >
      <dl className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-white/10 px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-10">
        {LANDING_PAGE_CONTENT.stats.map(({ value, label }) => (
          <div className="flex items-center justify-center px-4 py-7 text-center" key={label}>
            <div>
              <dt className="order-2 mt-1 text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                {label}
              </dt>
              <dd className="order-1 font-serif text-2xl text-white">
                {value}
              </dd>
            </div>
          </div>
        ))}
      </dl>
    </section>
  )
}