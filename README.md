# Learn Language Academy

An AI-powered language learning platform that connects users with a conversational AI tutor on Telegram. Users choose their native language and a target language, then get a personalized Telegram bot link to start practicing immediately.

## What It Does

- **Conversational AI Tutor** — Practice any language through real conversations with an AI, available 24/7
- **100+ Languages** — Supports African, Asian, European, Middle Eastern, Indigenous, and rare languages
- **Telegram Integration** — Generates a personalized deep link to the Telegram bot based on language preferences
- **Zero Friction** — No sign-up, no credit card. Choose your languages and start learning

## Tech Stack

- React 18 + TypeScript
- Vite (build tool)
- Tailwind CSS (styling)
- React Router (routing)

## Development

```sh
npm install
npm run dev
```

The dev server starts at `http://localhost:8080`.

## Build

```sh
npm run build
```

## Project Structure

```
src/
├── pages/           # Route pages (Index, NotFound)
├── components/      # UI components (LanguageForm, HowItWorks, SupportedLanguages)
│   └── ui/          # Reusable primitives (Button, Input)
├── lib/             # Utilities and language mappings
├── hooks/           # Custom React hooks
└── assets/          # Static images
```
