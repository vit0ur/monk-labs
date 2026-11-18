"use client"

import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { LANDING_PAGE_CONTENT } from "@/constants/landing-page"

export function ServicesSection() {
  const { services } = LANDING_PAGE_CONTENT

  return (
    <section 
      id="solutions" 
      className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32" 
      aria-labelledby="services-title"
    >
      <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--brand-coral)]/70">
            {services.eyebrow}
          </p>
          <h2 id="services-title" className="mt-3 max-w-2xl font-serif text-4xl leading-tight text-white sm:text-5xl">
            {services.title}
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-6 text-zinc-500">
          {services.description}
        </p>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        {services.items.map(({ icon: Icon, number, title, copy }) => (
          <motion.article 
            whileHover={{ y: -4 }} 
            key={number} 
            className="group rounded-2xl border border-white/10 bg-white/[0.025] p-7 transition-colors hover:border-[var(--brand-coral)]/30 hover:bg-[var(--brand-purple)]/[0.04] sm:p-9"
          >
            <div className="flex items-start justify-between">
              <Icon className="size-6 text-[var(--brand-coral)]" aria-hidden="true" />
              <span className="font-mono text-xs text-zinc-600">{number}</span>
            </div>
            <h3 className="mt-14 font-serif text-2xl text-white">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-500">{copy}</p>
            <ChevronRight className="mt-7 size-4 text-zinc-600 transition-transform group-hover:translate-x-1 group-hover:text-[var(--brand-coral)]" aria-hidden="true" />
          </motion.article>
        ))}
      </div>
    </section>
  )
}