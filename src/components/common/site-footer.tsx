import { ArrowUp, ArrowUpRight, Sparkles } from "lucide-react"
import { LANDING_PAGE_CONTENT } from "@/constants/landing-page"

export function SiteFooter() {
  const { brand, footer } = LANDING_PAGE_CONTENT

  return (
    <footer className="relative z-10 border-t border-white/10 px-6 py-9 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <span className="grid size-8 place-items-center rounded-full border border-white/15">
            <Sparkles className="size-3 text-[var(--brand-coral)]" aria-hidden="true" />
          </span>
          <span className="font-serif tracking-[0.12em] text-white">{brand.name}</span>
        </div>

        <p className="text-xs text-zinc-600">{footer.copyright}</p>

        <div className="flex items-center gap-4 text-zinc-500">
          {footer.links.map((link) => {
            const isExternal = link.href.startsWith("http")
            return (
              <a 
                key={link.href}
                href={link.href} 
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer noopener" : undefined}
                className="flex items-center gap-1 text-xs text-zinc-400 transition-colors hover:text-[var(--brand-coral)]"
              >
                {link.label}
                <ArrowUpRight className="size-3" aria-hidden="true" />
              </a>
            )
          })}

          <a 
            href="#top" 
            aria-label={footer.backToTop}
            className="flex size-7 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-colors hover:border-[var(--brand-coral)]/40 hover:text-[var(--brand-coral)]"
          >
            <ArrowUp className="size-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}