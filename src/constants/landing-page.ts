import type { Variants } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import {
  Blocks,
  Bot,
  Code2,
  Gauge,
  Layers3,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react"

export interface NavigationLink {
  label: string
  href: string
}

export interface ServiceItem {
  icon: LucideIcon
  number: string
  title: string
  copy: string
}

export interface HighlightItem {
  icon: LucideIcon
  title: string
  copy: string
}

export interface ProcessStep {
  number: string
  icon: LucideIcon
  title: string
  copy: string
}

export interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
}

export interface FaqItem {
  question: string
  answer: string
}

export const LANDING_PAGE_CONTENT = {
  brand: {
    name: "Monk-Labs",
    shortName: "ML",
    homeLabel: "Voltar para o início",
  },
  navigation: {
    links: [
      { label: "Soluções", href: "#solutions" },
      { label: "Diferenciais", href: "#differentials" },
      { label: "Processo", href: "#process" },
      { label: "Contato", href: "#contact" },
    ] satisfies NavigationLink[],
    cta: "Solicitar diagnóstico",
  },
  hero: {
    eyebrow: "Engenharia para produtos que evoluem",
    title: "Complexidade de negócio. Engenharia que entrega.",
    emphasis: "Entrega.",
    description:
      "Transformamos desafios complexos em produtos digitais escaláveis, de alta performance e com uma experiência de usuário impecável.",
    primaryCta: "Solicitar diagnóstico",
    primaryHref: "#contact",
    secondaryCta: "Conhecer soluções",
    secondaryHref: "#solutions",
    modelLabel: "Modelo 3D interativo de arquitetura digital",
  },
  stats: [
    { value: "End-to-end", label: "Da estratégia à escala" },
    { value: "Cloud native", label: "Arquitetura preparada para crescer" },
    { value: "Engineering-led", label: "Decisões guiadas por engenharia" },
  ],
  services: {
    eyebrow: "Soluções para a próxima fase",
    title: "Tecnologia que transforma estratégia em produto.",
    description:
      "Atuamos onde visão de negócio e excelência técnica precisam se encontrar para gerar crescimento sustentável.",
    items: [
      {
        icon: Code2,
        number: "01",
        title: "Engenharia de software & arquitetura",
        copy: "Sistemas web e mobile escaláveis, microsserviços, APIs robustas e migração de legado com decisões técnicas que sustentam o crescimento.",
      },
      {
        icon: Layers3,
        number: "02",
        title: "Produtos digitais end-to-end",
        copy: "Do discovery e UI/UX ao desenvolvimento, testes e implantação: uma equipe integrada para transformar a ideia em produto de verdade.",
      },
      {
        icon: ShieldCheck,
        number: "03",
        title: "Consultoria & reestruturação tecnológica",
        copy: "Auditoria de código, performance, segurança, DevOps e boas práticas para tornar seu time mais eficiente e sua operação mais confiável.",
      },
    ] satisfies ServiceItem[],
  },
  differentials: {
    eyebrow: "Por que a Monk-Labs?",
    title: "Menos atrito. Mais produto em produção.",
    description:
      "Combinamos profundidade técnica, visão de produto e uma camada de interação que faz sua solução ser percebida antes mesmo de ser explicada.",
    items: [
      {
        icon: Gauge,
        title: "Alta performance",
        copy: "Arquiteturas observáveis e eficientes, pensadas para responder rápido e operar com previsibilidade.",
      },
      {
        icon: Blocks,
        title: "Código limpo e escalável",
        copy: "Base técnica sustentável, padrões claros e decisões que reduzem o custo de evolução do produto.",
      },
      {
        icon: Sparkles,
        title: "Experiências interativas",
        copy: "Interfaces sofisticadas, animações e 3D usados com propósito para diferenciar produtos digitais.",
      },
      {
        icon: Rocket,
        title: "Entrega acelerada",
        copy: "Ciclos curtos, colaboração próxima e foco no que gera valor para colocar aprendizados em produção mais cedo.",
      },
    ] satisfies HighlightItem[],
  },
  process: {
    eyebrow: "Como trabalhamos",
    title: "Clareza para decidir. Ritmo para construir.",
    description:
      "Um processo pragmático para reduzir incertezas, validar hipóteses e entregar evolução contínua.",
    steps: [
      {
        number: "01",
        icon: Search,
        title: "Discovery",
        copy: "Entendemos o negócio, os usuários e as restrições para definir o problema certo.",
      },
      {
        number: "02",
        icon: Workflow,
        title: "Arquitetura",
        copy: "Desenhamos uma base técnica segura, escalável e alinhada aos objetivos do produto.",
      },
      {
        number: "03",
        icon: Bot,
        title: "Desenvolvimento ágil",
        copy: "Construímos em ciclos curtos, com qualidade, testes e feedback constante.",
      },
      {
        number: "04",
        icon: Rocket,
        title: "Entrega & escala",
        copy: "Colocamos o produto no ar e evoluímos performance, operação e novos desafios.",
      },
    ] satisfies ProcessStep[],
  },
  testimonials: [
    {
      quote:
        "A Monk-Labs nos ajudou a transformar uma operação difícil de escalar em uma plataforma preparada para o próximo ciclo de crescimento.",
      author: "Liderança de Produto",
      role: "Scale-up de tecnologia",
      company: "Cliente Monk-Labs",
    },
    {
      quote:
        "A combinação de visão de produto e rigor de engenharia acelerou decisões que estavam travadas há meses.",
      author: "CTO",
      role: "Empresa em modernização",
      company: "Cliente Monk-Labs",
    },
  ] satisfies Testimonial[],
  socialProof: {
    eyebrow: "O impacto da engenharia certa",
    title: "Parceiros para construir o que vem depois.",
  },
  faq: [
    {
      question:
        "A Monk-Labs trabalha com produtos novos ou sistemas legados?",
      answer:
        "Nos dois cenários. Podemos iniciar um produto do zero ou modernizar sistemas existentes por etapas, reduzindo risco e preservando o que já gera valor.",
    },
    {
      question: "Vocês assumem o projeto completo?",
      answer:
        "Sim. Atuamos de forma end-to-end, do discovery e design à engenharia, qualidade, implantação e evolução contínua.",
    },
    {
      question: "Como começa uma parceria?",
      answer:
        "Começamos com uma conversa de diagnóstico para entender contexto, objetivos e restrições. Em seguida, propomos o próximo passo mais útil para o seu momento.",
    },
  ] satisfies FaqItem[],
  faqSection: {
    eyebrow: "Perguntas frequentes",
    title: "O que você precisa saber antes de começar.",
  },
  contact: {
    id: "contact",
    eyebrow: "Pronto para avançar?",
    title: "Vamos transformar seu próximo desafio em produto.",
    description:
      "Converse com nossos especialistas e descubra o caminho mais consistente entre sua visão e uma solução digital pronta para crescer.",
    cta: "Agendar conversa",
    successMessage:
      "Recebemos seu interesse. Em breve, nossa equipe entrará em contato.",
    fields: {
      name: { label: "Seu nome", placeholder: "Como podemos chamar você?" },
      email: { label: "E-mail corporativo", placeholder: "voce@empresa.com" },
      challenge: {
        label: "Sobre o que você quer conversar?",
        placeholder:
          "Conte brevemente sobre o desafio do seu produto ou tecnologia.",
      },
    },
  },
  footer: {
    copyright: "© 2026 Monk-Labs. Engenharia e produtos digitais.",
    email: "hello@monk-labs.com",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com" },
      { label: "E-mail", href: "mailto:hello@monk-labs.com" },
    ] satisfies NavigationLink[],
    backToTop: "Voltar ao topo",
  },
  seo: {
    title: "Monk-Labs | Engenharia e produtos digitais",
    description:
      "A Monk-Labs transforma desafios complexos em produtos digitais escaláveis, performáticos e memoráveis.",
    openGraph: {
      title: "Monk-Labs | Engenharia que transforma complexidade em produto",
      description:
        "Consultoria de tecnologia, engenharia de software e desenvolvimento de produtos digitais end-to-end.",
      type: "website" as const,
      locale: "pt_BR",
    },
  },
} as const

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}