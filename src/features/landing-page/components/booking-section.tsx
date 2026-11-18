"use client"

import { useState, type FormEvent } from "react"
import { ArrowRight, Check, Mail, UserRound } from "lucide-react"
import { LANDING_PAGE_CONTENT } from "@/constants/landing-page"

export function BookingSection() {
  const [submitted, setSubmitted] = useState(false)
  const { contact } = LANDING_PAGE_CONTENT

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section 
      id={contact.id} 
      className="relative z-10 mx-6 mb-20 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] lg:mx-auto lg:max-w-7xl" 
      aria-labelledby="contact-title"
    >
      <div className="absolute -right-20 -top-28 size-72 rounded-full bg-[var(--brand-purple)]/10 blur-3xl" aria-hidden="true" />

      <div className="relative p-7 sm:p-10">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--brand-coral)]/70">
              {contact.eyebrow}
            </p>
            <h2 id="contact-title" className="mt-3 max-w-2xl font-serif text-3xl text-white sm:text-4xl">
              {contact.title}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-zinc-500">
            {contact.description}
          </p>
        </div>

        <form className="mt-9 grid gap-3 md:grid-cols-2" onSubmit={handleSubmit}>
          <label className="flex flex-col gap-2 text-[10px] uppercase tracking-[0.16em] text-zinc-500">
            <span>{contact.fields.name.label}</span>
            <span className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-3 transition-colors focus-within:border-[var(--brand-coral)]/50">
              <UserRound className="size-4 text-[var(--brand-coral)]" aria-hidden="true" />
              <input 
                required 
                name="name"
                className="w-full bg-transparent py-3 text-sm normal-case tracking-normal text-white outline-none placeholder:text-zinc-600" 
                placeholder={contact.fields.name.placeholder} 
              />
            </span>
          </label>

          <label className="flex flex-col gap-2 text-[10px] uppercase tracking-[0.16em] text-zinc-500">
            <span>{contact.fields.email.label}</span>
            <span className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-3 transition-colors focus-within:border-[var(--brand-coral)]/50">
              <Mail className="size-4 text-[var(--brand-coral)]" aria-hidden="true" />
              <input 
                required 
                type="email" 
                name="email"
                className="w-full bg-transparent py-3 text-sm normal-case tracking-normal text-white outline-none placeholder:text-zinc-600" 
                placeholder={contact.fields.email.placeholder} 
              />
            </span>
          </label>

          <label className="flex flex-col gap-2 text-[10px] uppercase tracking-[0.16em] text-zinc-500 md:col-span-2">
            <span>{contact.fields.challenge.label}</span>
            <textarea 
              required 
              rows={4} 
              name="challenge"
              className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm normal-case tracking-normal text-white outline-none transition-colors focus:border-[var(--brand-coral)]/50 placeholder:text-zinc-600"
              placeholder={contact.fields.challenge.placeholder} 
            />
          </label>

          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center md:col-span-2">
            <button 
              type="submit"
              disabled={submitted}
              aria-live="polite"
              className="flex items-center justify-center gap-2 rounded-xl bg-[var(--brand-purple)] px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-white hover:text-zinc-950 disabled:cursor-not-allowed disabled:opacity-80"
            >
              {submitted ? (
                <>
                  <Check className="size-4" aria-hidden="true" />
                  {contact.successMessage}
                </>
              ) : (
                <>
                  {contact.cta}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}