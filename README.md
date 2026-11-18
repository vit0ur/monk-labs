# Monk-Labs

Landing page institucional da Monk-Labs, focada em engenharia de software e produtos digitais. O site apresenta as soluções, diferenciais e processo de trabalho da empresa, além de depoimentos, perguntas frequentes e uma seção de contato.

## Tecnologias

- Next.js 16 com App Router
- React 19 e TypeScript
- Tailwind CSS 4
- Framer Motion e Lucide React
- Spline para a cena 3D interativa

## Pré-requisitos

- Node.js 20.9 ou superior
- pnpm 10.5.2

## Como executar

Instale as dependências:

```bash
pnpm install
```

Inicie o servidor de desenvolvimento:

```bash
pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Comandos disponíveis

```bash
pnpm dev    # Inicia o servidor de desenvolvimento
pnpm build  # Gera a versão de produção
pnpm start  # Inicia a versão de produção
pnpm lint   # Executa o comando de lint configurado no projeto
```

## Estrutura do projeto

```text
src/
├── app/                              # Rotas, layout global e estilos
├── components/
│   ├── 3d/                           # Componentes 3D
│   └── common/                       # Cabeçalho e rodapé
├── constants/
│   └── landing-page.ts               # Conteúdo e textos da landing page
└── features/
    └── landing-page/components/      # Seções da página inicial
```

Os textos, links de navegação, informações de contato e metadados de SEO são centralizados em `src/constants/landing-page.ts`.

## Observações

- A cena 3D do Spline é carregada de um endereço externo e requer conexão com a internet.
- O formulário de contato ainda não envia os dados para um serviço ou API; atualmente, exibe uma confirmação visual no navegador.
