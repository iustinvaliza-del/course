# Vibe Code with Admin — Course Platform

## What This Is
A dark-themed, premium web-based course teaching complete non-coders how to build real software using AI agents. Students go from "I chat with AI" to "I ship real software" across 5 modules (0–4) covering mindset, Antigravity, Claude Cowork, Claude Code, and a capstone build.

## Stack
- React 18 + Vite 5
- React Router v6 (client-side routing)
- Tailwind CSS v3 (custom design tokens in tailwind.config.js)
- localStorage for progress persistence
- No backend, no auth, no external APIs

## How to Run
```bash
npm install
npm run dev        # dev server on http://localhost:5173
npm run build      # production build to /dist
```

## Architecture

```
src/
  components/
    Navbar.jsx          # Fixed top nav, shows back-to-modules when inside module
    ModuleCard.jsx      # Landing page card per module with progress bar
    LessonLayout.jsx    # Sidebar + content shell for all lesson pages
    PromptBlock.jsx     # Styled prompt example with copy button
    ProgressBar.jsx     # Reusable progress bar (label + fill)
    ScopingTemplate.jsx # Capstone scoping form with auto-save to localStorage
  pages/
    Landing.jsx         # Hero + module grid
    Module.jsx          # Module overview + lesson list
    Lesson.jsx          # Renders lesson body + PromptBlock from courseData
    Capstone.jsx        # Capstone page with ScopingTemplate
  data/
    courseData.js       # Single source of truth for ALL course content
  hooks/
    useProgress.js      # localStorage-backed progress (markComplete, isComplete, etc.)
  App.jsx               # BrowserRouter + route definitions
  main.jsx              # React entry point
  index.css             # Tailwind directives + custom utilities
```

## Routing
| Path | Component |
|------|-----------|
| `/` | Landing |
| `/module/:moduleSlug` | Module |
| `/module/:moduleSlug/lesson/:lessonSlug` | Lesson |
| `/capstone` | Capstone |

## Design Tokens (tailwind.config.js)
| Token | Value | Use |
|-------|-------|-----|
| `bg-bg` | #0f0f0f | Page background |
| `bg-surface` | #1a1a1a | Card/panel background |
| `bg-surfaceHigh` | #242424 | Elevated surface |
| `border-border` | #2a2a2a | Default borders |
| `text-accent` | #7c3aed | Violet — primary accent |
| `text-accentLight` | #a855f7 | Lighter violet — hover/active |
| `text-textPrimary` | #f0f0f0 | Primary text |
| `text-textSecondary` | #9ca3af | Body text |
| `text-textMuted` | #6b7280 | Labels, metadata |

## Course Data Schema (courseData.js)
Each module: `{ id, slug, number, title, tagline, duration, icon, color, lessons[] }`
Each lesson: `{ id, slug, title, duration, concepts[], body, promptExample: { label, prompt, note } }`

## Conventions
- All course content lives in `courseData.js` — never hardcode lesson content in components
- Use Tailwind tokens (bg-surface, text-accent, etc.) — never arbitrary hex values in JSX
- Progress state lives only in `useProgress` hook — don't write to localStorage elsewhere
- Slugs are used in URLs; IDs are used for progress tracking — keep both in courseData

## Current Phase
**Phase 1 — COMPLETE**
Scaffold, routing, courseData, all components, all pages, useProgress hook, CLAUDE.md

**Phase 2 — COMPLETE**
- Left-aligned asymmetric hero with radial violet gradient + SVG noise grain background
- ModuleCard spotlight border hover effect + in-progress deep-link to first incomplete lesson
- LessonLayout: desktop sidebar nav + mobile fixed bottom bar with lesson drawer
- All emojis replaced with per-module SVG icons (ModuleIcon.jsx)
- Navbar: SVG diamond icon, cleaner spacing
- Capstone.jsx: no pill badge, sentence-case heading, SVG checklist icons
- Lesson.jsx: full line-by-line body renderer (paragraphs, ol, ul, bold, code)
- index.css: fadeUp animations, lesson-prose typography, module-card stagger
- Font changed from Inter to Outfit (Google Fonts) across the stack
- UI Writing Style Guide applied: no em dashes, no pill badges, concrete CTAs
- favicon.svg added to /public

**Phase 3 — NEXT**
Spot-check all module/lesson pages, verify mobile layout, add any missing content polish

## Off-Limits
- Do not add a backend or database
- Do not add auth of any kind
- Do not install new npm packages without checking here first
- Do not hardcode content — all edits to course text go in courseData.js only
- Do not change the routing structure without updating this file
- Do not use em dashes in UI copy — see Writing Style Guide (Agent Memory/Knowledge Base/WRITING_STYLE_UI.md)
- Do not use pill badge pattern for decorative labels — only use for functional status indicators

## Resolved Issues
- Body renderer now uses line-by-line parsing: `**bold**`, `` `code` ``, numbered lists (ol), bullet lists (ul), paragraphs
- Mobile lesson nav implemented as fixed bottom bar with prev/next + lesson drawer

## Known Issues
- None currently tracked
