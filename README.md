# Promptarena

A glass-box LLM evaluation playground: define a task with natural-language quality
criteria, fan it out across multiple providers in parallel, and let an LLM-as-judge
score the outputs — with **cost, tokens and latency in plain sight**.

🔗 **Live demo:** https://promptarena-ai.vercel.app/

> 🚧 **Work in progress.** The walking skeleton is deployed (see status below); features
> are being built incrementally. This is a portfolio project — the engineering _is_ the
> point: clean architecture, observability, and AI you can actually trust in production.

## Why "glass box"

Most LLM apps hide the machinery. Promptarena exposes it on purpose — the provider
routing, the cost ticking up, the judge's verdict and its reasoning. The goal isn't a
demo that looks impressive; it's one that shows the engineering underneath.

## Planned capabilities

- **Multi-provider fan-out** behind a single in-house abstraction (OpenAI, Anthropic,
  Gemini, Groq…) — adding a provider is one adapter, nothing else changes.
- **LLM-as-judge** scoring each output against natural-language criteria (verdict,
  confidence, justification), with schema-validated structured output.
- **Cost & token observability** per call, with a configurable cost guardrail.
- **Snapshots & regression** — save a run, replay it later, compare.
- **Mock-first**: works with zero API keys (deterministic mock adapter); real providers
  via bring-your-own-key.

## Tech stack

- [Next.js](https://nextjs.org) (App Router) · TypeScript (strict) · Tailwind CSS
- [next-intl](https://next-intl.dev) for i18n (FR)
- Vitest (tests) · ESLint + Prettier (quality)
- CI: GitHub Actions (lint · typecheck · format) — CD: Vercel

## Local development

```bash
npm install
npm run dev          # dev server on http://localhost:3000
```

Other scripts:

```bash
npm run build        # production build
npm run start        # serve the production build
npm run lint         # ESLint
npm run typecheck    # tsc --noEmit
npm run format       # Prettier (write)
npm run format:check # Prettier (check only — same gate as CI)
```

## Architecture principle

The `src/domain/` layer holds pure business logic (pricing, cost aggregation, judging)
with **zero framework or SDK dependency**. Providers, persistence and the Next.js UI
live in `src/infra/` and `src/app/` and depend on the domain — never the reverse. Swap
Next or a provider tomorrow, the domain doesn't move.

## Status

- ✅ **M0** — walking skeleton: deployed end-to-end (Next.js + strict TS, CI/CD, i18n,
  Prettier).
- ⏳ **M1** — domain core (types, pricing, cost calculation) — next up.
