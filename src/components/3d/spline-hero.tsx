"use client"

import { useState } from "react"
import dynamic from "next/dynamic"

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => (
    <div
      className="h-full w-full animate-pulse rounded-3xl bg-[var(--brand-purple)]/5"
      aria-label="Carregando modelo 3D interativo"
      role="status"
    />
  ),
})

interface SplineHeroProps {
  label: string
}

export function SplineHero({ label }: SplineHeroProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div
      className="relative mx-auto h-[390px] w-full max-w-2xl overflow-hidden [&>a]:!hidden sm:h-[500px]"
      aria-label={label}
      aria-busy={!isLoaded}
      role="region"
    >
      <div 
        className="absolute inset-1/4 rounded-full bg-[var(--brand-purple)]/10 blur-3xl"
        aria-hidden="true" 
      />
      <div className="relative h-full w-full">
        <Spline 
          scene="https://prod.spline.design/H7iE7y5rC8mE8-Zu/scene.splinecode" 
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    </div>
  )
}

export default SplineHero