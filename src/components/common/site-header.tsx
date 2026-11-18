"use client"

import { useState } from "react"
import { Menu, Sparkles, X } from "lucide-react"
import { LANDING_PAGE_CONTENT } from "@/constants/landing-page"

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { brand, navigation } = LANDING_PAGE_CONTENT

  return (
    <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
      <a 
        href="#top" 
        className="flex items-center gap-3" 
        aria-label={brand.homeLabel}
      >
        <span className="grid size-9 place-items-center rounded-full border border-[var(--brand-coral)]/25 bg-[var(--brand-purple)]/10">
          <Sparkles className="size-4 text-[var(--brand-coral)]" aria-hidden="true" />
        </span>
        <span className="font-serif text-xl tracking-[0.12em] text-white">
          {brand.name}
        </span>
      </a>

      <nav 
        className="hidden items-center gap-8 text-[11px] uppercase tracking-[0.18em] text-zinc-400 md:flex" 
        aria-label="Navegação principal"
      >
        {navigation.links.map((link) => (
          <a 
            key={link.href}
            href={link.href} 
            className="transition-colors hover:text-[var(--brand-coral)]"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <button 
        type="button"
        className="rounded-full border border-white/10 p-2 text-zinc-300 transition-colors hover:bg-white/5 md:hidden" 
        onClick={() => setMenuOpen((open) => !open)} 
        aria-expanded={menuOpen} 
        aria-controls="mobile-navigation" 
        aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
      >
        {menuOpen ? (
          <X className="size-5" aria-hidden="true" />
        ) : (
          <Menu className="size-5" aria-hidden="true" />
        )}
      </button>

      <a 
        href={`#${LANDING_PAGE_CONTENT.contact.id}`} 
        className="hidden rounded-full border border-[var(--brand-coral)]/30 px-5 py-2.5 text-[10px] uppercase tracking-[0.18em] text-[var(--brand-coral)] transition hover:bg-[var(--brand-purple)] hover:text-zinc-950 md:block"
      >
        {navigation.cta}
      </a>

      {menuOpen && (
        <nav 
          id="mobile-navigation" 
          className="absolute left-6 right-6 top-full mt-2 flex flex-col gap-4 rounded-2xl border border-white/10 bg-zinc-950/95 p-6 text-xs uppercase tracking-[0.18em] shadow-2xl backdrop-blur-md md:hidden" 
          aria-label="Navegação mobile"
        >
          {navigation.links.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="text-zinc-300 transition-colors hover:text-[var(--brand-coral)]"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a 
            href={`#${LANDING_PAGE_CONTENT.contact.id}`} 
            className="mt-2 text-center rounded-xl bg-[var(--brand-coral)] py-3 text-xs font-semibold text-zinc-950 transition hover:bg-white"
            onClick={() => setMenuOpen(false)}
          >
            {navigation.cta}
          </a>
        </nav>
      )}
    </header>
  )
}