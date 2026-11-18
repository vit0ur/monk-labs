"use client"

import { motion } from "framer-motion"
import { ArrowRight, Star } from "lucide-react"
import { SplineHero } from "@/components/3d/spline-hero"
import { LANDING_PAGE_CONTENT, fadeUp } from "@/constants/landing-page"

export function HeroSection() {
  const { hero } = LANDING_PAGE_CONTENT

  return (
    <section 
      id="top" 
      className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-16 text-center lg:px-10 lg:pt-20" 
      aria-labelledby="hero-title"
    >
      <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={fadeUp} 
        transition={{ duration: 0.7 }} 
        className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-[var(--brand-coral)]/75"
      >
        <Star className="size-3 fill-[var(--brand-coral)] text-[var(--brand-coral)]" aria-hidden="true" />
        {hero.eyebrow}
      </motion.div>

      <motion.h1 
        id="hero-title" 
        initial="hidden" 
        animate="visible" 
        variants={fadeUp} 
        transition={{ duration: 0.7, delay: 0.1 }} 
        className="mt-7 max-w-5xl font-serif text-5xl leading-[.98] tracking-[-0.04em] text-white sm:text-7xl lg:text-8xl"
      >
        {hero.title}{" "}
        <span className="bg-gradient-to-r from-[var(--brand-purple)] via-[var(--brand-coral)] to-amber-200 bg-clip-text text-transparent">
          {hero.emphasis}
        </span>
      </motion.h1>

      <motion.p 
        initial="hidden" 
        animate="visible" 
        variants={fadeUp} 
        transition={{ duration: 0.7, delay: 0.2 }} 
        className="mt-6 max-w-2xl text-sm leading-7 text-zinc-400"
      >
        {hero.description}
      </motion.p>

      <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={fadeUp} 
        transition={{ duration: 0.7, delay: 0.3 }} 
        className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
      >
        <a 
          href={hero.primaryHref} 
          className="group flex items-center gap-3 rounded-full bg-[var(--brand-purple)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white hover:text-zinc-950"
        >
          {hero.primaryCta}
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </a>

        <a 
          href={hero.secondaryHref} 
          className="rounded-full border border-white/15 px-6 py-3 text-xs uppercase tracking-[0.14em] text-zinc-300 transition-colors hover:border-[var(--brand-coral)]/50 hover:text-[var(--brand-coral)]"
        >
          {hero.secondaryCta}
        </a>
      </motion.div>

      <SplineHero label={hero.modelLabel} />
    </section>
  )
}