# Prompt para o Cursor

Você é um desenvolvedor Front-end Sênior especializado em Next.js 15, React 19, TypeScript, Tailwind CSS e boas práticas de UI/UX.

Seu objetivo é criar a estrutura completa de um site moderno para um estúdio de tatuagem, deixando o projeto preparado para que cada seção seja implementada posteriormente.

## Tecnologias obrigatórias

* Next.js 15 (App Router)
* TypeScript
* Tailwind CSS
* ESLint
* Estrutura escalável
* Componentização
* Código limpo
* Responsividade Mobile First

Não utilize bibliotecas desnecessárias.

---

## Objetivo

Criar apenas a estrutura inicial do projeto.

Não implemente o conteúdo das seções.

Cada seção deverá conter apenas um componente placeholder para ser desenvolvido posteriormente.

---

## Estrutura de pastas

Crie a seguinte estrutura:

```
src/
│
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── layout/
│   │   ├── Menu.tsx
│   │   └── Footer.tsx
│   │
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Studio.tsx
│   │   ├── TattooBreakdown.tsx
│   │   ├── Gallery.tsx
│   │   ├── AboutUs.tsx
│   │   ├── Recognition.tsx
│   │   └── CTA.tsx
│   │
│   └── ui/
│
├── lib/
│
├── hooks/
│
├── types/
│
├── data/
│
├── assets/
│   ├── images/
│   ├── icons/
│   └── videos/
│
└── styles/
```

---

## Organização

No arquivo page.tsx apenas importe as seções na ordem abaixo:

```
<Menu />

<Hero />

<Studio />

<TattooBreakdown />

<Gallery />

<AboutUs />

<Recognition />

<CTA />

<Footer />
```

Cada componente deverá retornar apenas:

```
<section id="nome-da-secao">
    Nome da seção
</section>
```

Não desenvolva layout.

Não coloque textos.

Não coloque imagens.

Não coloque estilos além de classes básicas do Tailwind.

---

## Layout

Configure:

* fonte padrão
* background preto
* texto branco
* scroll suave
* largura máxima do conteúdo (max-w-7xl)
* container reutilizável
* espaçamentos consistentes

Configure tudo para que o projeto já fique preparado para um design premium.

---

## Tailwind

Configure um tema preparado para o projeto contendo:

Cores

* Background
* Surface
* Primary
* Secondary
* Accent
* Muted
* White

Spacing

Border Radius

Shadows

Transitions

Container

---

## Globals

Organize o globals.css com:

Reset

Scrollbar personalizada

Seleção de texto personalizada

Scroll suave

Variáveis CSS

Utilitários globais

---

## Componentes

Cada componente deverá:

* possuir tipagem
* export default
* estar organizado
* possuir comentário indicando sua responsabilidade

Exemplo:

```tsx
/**
 * Hero principal do site.
 * O conteúdo será implementado posteriormente.
 */
```

---

## Objetivo futuro

A estrutura deverá permitir que posteriormente cada seção seja criada individualmente apenas solicitando, por exemplo:

"Desenvolva a seção Hero."

ou

"Desenvolva a seção Gallery."

sem necessidade de alterar a estrutura existente.

---

## Qualidade

Utilize princípios:

* SOLID
* Clean Code
* Componentização
* Reutilização
* Performance
* SEO Ready
* Acessibilidade
* Mobile First

---

## Não faça

Não utilize dados fictícios.

Não implemente layout.

Não utilize bibliotecas de animação.

Não utilize Swiper.

Não utilize Framer Motion.

Não utilize componentes externos.

Não crie design ainda.

Apenas entregue um projeto extremamente bem estruturado e preparado para receber cada seção individualmente.
