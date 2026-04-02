// courseData.js — "Vibe Code with Admin"

export const modules = [
  {
    id: "module-0",
    slug: "mindset",
    number: 0,
    title: "Module 0 — The Mindset",
    tagline: "Before you touch any tool, you need to think differently.",
    duration: "~20 min",
    icon: "🧠",
    color: "from-violet-600 to-indigo-600",
    lessons: [
      {
        id: "m0-l1",
        slug: "architect",
        title: "You are the Architect",
        duration: "5 min",
        concepts: ["Director vs executor", "AI as contractor", "You own the vision"],
        body: `
Most people use AI like a search engine. They ask a question and hope for a good answer.
Vibe coding is different. You are not a user. You are a director.

Think of it like managing a contractor to build your house. You don't need to know how
to lay bricks. But you need to know what you want built, describe it clearly, and check
the work at each step.

The AI (Claude Code, Antigravity, or Claude Cowork) is your contractor.
It handles the technical heavy lifting. You handle the vision, the decisions, and the review.

This mindset shift is everything. Without it, you'll keep using AI like a chatbot.
With it, you become a builder.
        `,
        promptExample: {
          label: "Chatbot thinking (don't do this)",
          prompt: "Hey, can you help me make a website?",
          note: "Too vague. The AI will guess at everything and probably build the wrong thing."
        }
      },
      {
        id: "m0-l2",
        slug: "prompting-superpower",
        title: "Why Prompting is Your New Superpower",
        duration: "7 min",
        concepts: ["Specificity", "Context", "Output format", "Constraints"],
        body: `
Here's the truth: the quality of what AI builds for you is almost entirely determined
by the quality of what you ask for.

A vague prompt gives you a vague result. A sharp prompt gives you something usable.

The difference between a beginner and an advanced vibe coder isn't which tools they use.
It's how they communicate with those tools.

A great prompt has four ingredients:
1. **Context**: what's the situation? What already exists?
2. **Task**: what exactly do you want done?
3. **Format**: how should the output look? A list? A file? A React component?
4. **Constraints**: what rules should it follow? What should it NOT do?

Compare these two prompts:
        `,
        promptExample: {
          label: "Weak vs Strong",
          prompt: `WEAK: "Make a sign-up form."

STRONG: "Build a sign-up form in React with fields for name, email, and password.
The password field should show/hide with a toggle. Use Tailwind for styling.
Make it mobile-friendly. Do not add any backend logic yet — just the UI."`,
          note: "Same request, completely different output. The second prompt leaves no room for guessing."
        }
      },
      {
        id: "m0-l3",
        slug: "scope-first",
        title: "Scope Before You Build",
        duration: "8 min",
        concepts: ["Phase-gating", "PRDs", "Avoiding scope creep", "CLAUDE.md"],
        body: `
The biggest mistake new vibe coders make is starting to build before they know what
they're building.

You open the tool, type "build me an app that does X," and twenty minutes later you
have something that half-works, goes in the wrong direction, and is a mess to fix.

The fix is simple: scope first, build second.

Before you write a single prompt to build something, answer these questions:
- What is this thing? (one sentence)
- Who uses it?
- What are the 3-5 core things it needs to do?
- What does it NOT need to do right now?
- What phases should I build it in?

This is what professionals call a PRD (Product Requirements Document). For vibe coders,
it becomes your CLAUDE.md: a plain-text file that tells the AI everything it needs to
know about your project before it starts working.

Think of CLAUDE.md as the briefing document you'd give a new employee on their first day.
The better the briefing, the better the work.
        `,
        promptExample: {
          label: "Mini scope template",
          prompt: `Project: [name]
What it does: [one sentence]
Who uses it: [describe the user]
Core features (Phase 1 only):
- Feature 1
- Feature 2
- Feature 3
Out of scope for now: [list anything to explicitly exclude]
Tech stack: [React, plain HTML, Python — whatever]`,
          note: "Paste this at the top of every new project before asking Claude to build anything."
        }
      }
    ]
  },

  {
    id: "module-1",
    slug: "antigravity",
    number: 1,
    title: "Module 1 — Antigravity: See It Instantly",
    tagline: "Your first real build. No experience required.",
    duration: "~30 min",
    icon: "⚡",
    color: "from-blue-600 to-cyan-500",
    lessons: [
      {
        id: "m1-l1",
        slug: "what-is-antigravity",
        title: "What is Antigravity?",
        duration: "7 min",
        concepts: ["VS Code fork", "Agent-first IDE", "Manager + Editor views", "Browser sub-agent"],
        body: `
Antigravity is Google's AI-powered coding environment. It looks like a code editor,
but it works completely differently from anything you've used before.

Instead of you writing code (or even copy-pasting AI suggestions into a file),
Antigravity sends autonomous agents to do the work across three surfaces simultaneously:
your code files, your terminal, and a real browser.

You don't manage any of that. You just describe what you want.

The interface has two main areas:
- **Manager View**: this is mission control. You type what you want built and watch
  agents plan and execute the work in real time.
- **Editor**: a standard code editor where you can review what the agents produced.

The browser sub-agent is the magic for beginners: it actually opens a browser, looks at
what was built, and verifies it visually, the same way you would by refreshing a page.
The AI sees the result, not just the code.
        `,
        promptExample: {
          label: "Your first Antigravity prompt",
          prompt: `Build a simple landing page for a fictional coffee brand called "Dusk Brew."
Include: a hero section with tagline, a section showing 3 products with descriptions,
and a footer with social links. Use a dark color scheme. Keep it one page, no backend.`,
          note: "Type this into the Manager View. Watch the agents plan, build, and render it live."
        }
      },
      {
        id: "m1-l2",
        slug: "feedback-loop",
        title: "The Feedback Loop: Prompt → See → Refine",
        duration: "10 min",
        concepts: ["Iteration", "Visual verification", "Commenting on artifacts", "Fast mode"],
        body: `
Here's what makes Antigravity perfect for beginners: you get instant visual feedback.

The cycle looks like this:
1. You describe what you want
2. The agent builds it and shows it in the browser
3. You look at the result
4. You describe what needs to change
5. The agent fixes it
6. Repeat

This is not so different from telling a designer "move that button to the right" and watching
them do it in Figma. Except the designer also writes all the code behind the scenes.

One powerful feature: you can comment directly on the plan the agent creates. Like leaving a sticky note
on a blueprint. The agent will adjust before building.

Two modes to know:
- **Planning mode**: agent shows you the plan, waits for approval. Use this for
  anything important. You see every decision before it's made.
- **Fast mode**: agent just does it. Use this for small tweaks.
        `,
        promptExample: {
          label: "Refinement prompt (after first build)",
          prompt: `The hero section looks good but the font is too small on mobile.
Make the headline 48px on desktop and 28px on mobile using Tailwind's responsive prefixes.
Also change the background from black to a very dark navy (#0a0a1a).`,
          note: "Be specific about what you see and what you want changed. Vague feedback = vague fixes."
        }
      },
      {
        id: "m1-l3",
        slug: "design-pipeline",
        title: "The /design Pipeline",
        duration: "13 min",
        concepts: ["Screenshot to code", "UI replication", "Design tokens", "Multimodal prompting"],
        body: `
One of the most useful things Antigravity can do is turn a screenshot into working code.

You take a screenshot of a design you like (a website, an app, a UI from Figma),
paste it into Antigravity, and say "build something that looks like this."

The agent uses vision (it can literally see images) to extract colors, layout, spacing,
and typography. Then it rebuilds from scratch.

This is the /design pipeline in practice:
1. Screenshot or describe a UI you want
2. Antigravity extracts the design language
3. It generates the matching code
4. You refine from there

You never have to describe pixels manually. You show, it builds.

This is especially powerful for people who have a strong visual sense but no coding
background. Your taste is now your most important skill.
        `,
        promptExample: {
          label: "Screenshot-to-code prompt",
          prompt: `[Attach screenshot]
Replicate this UI in React + Tailwind. Extract the color palette and font sizes.
Use dark mode. The layout should be responsive — stack vertically on mobile.
Do not copy any content — create placeholder text instead.`,
          note: "Attach the screenshot directly. The agent sees it as-is and starts extracting."
        }
      }
    ]
  },

  {
    id: "module-2",
    slug: "claude-cowork",
    number: 2,
    title: "Module 2 — Claude Cowork: Own Your Project",
    tagline: "Manage a real project without touching a terminal.",
    duration: "~25 min",
    icon: "📁",
    color: "from-emerald-600 to-teal-500",
    lessons: [
      {
        id: "m2-l1",
        slug: "what-is-cowork",
        title: "What is Claude Cowork?",
        duration: "7 min",
        concepts: ["File management", "Task tracking", "No terminal needed", "Project context"],
        body: `
Claude Cowork is the bridge between chatting with AI and running a full software project.

It's the layer where you manage your files, organize your tasks, and keep track of
what's been built. No terminal. No code required.

Think of it as your project manager's dashboard. Claude can:
- Read and organize your project files
- Track what's been completed and what's left
- Help you think through the next phase
- Prepare handoff packages for Claude Code

If Antigravity is where you prototype and see things instantly, Cowork is where you
step back, review what you have, and plan the next build session.

For non-coders, this is crucial: it gives you a sense of ownership over a project
without needing to understand what's inside each file.
        `,
        promptExample: {
          label: "Project review prompt in Cowork",
          prompt: `Look at the files in this project folder. Give me a plain-English summary of:
1. What has been built so far
2. What's missing based on the scope doc
3. Suggested next 3 tasks in priority order`,
          note: "Run this at the start of every session. It re-orients both you and the AI."
        }
      },
      {
        id: "m2-l2",
        slug: "phases-and-handoffs",
        title: "Thinking in Phases and Handoffs",
        duration: "10 min",
        concepts: ["Phase-gating", "Handoff packages", "Session continuity", "CLAUDE.md"],
        body: `
One of the hardest things about building with AI is continuity. Every new session,
the AI starts with a blank memory. It doesn't remember what you built last Tuesday.

The solution: document everything so the AI can pick up exactly where you left off.

This is what a handoff package is. It's a set of files you create at the end of every
build session that tells the AI what was done, what the current state is, and what to do next.

The most important file is CLAUDE.md. Think of it as your project bible:
- What the project is
- The tech stack
- Coding rules and conventions
- What's been completed
- What comes next

When you start a new session, you say: "Read the CLAUDE.md and continue from there."
The AI reads the brief, understands the context, and picks up seamlessly.

This is how professional builders maintain velocity over days and weeks: not by
remembering everything themselves, but by building a system that remembers for them.
        `,
        promptExample: {
          label: "End-of-session handoff prompt",
          prompt: `Update the CLAUDE.md to reflect today's session. Mark these tasks as complete:
[list what was done]
Add this to the "Next Session" section:
[list what comes next]
Note any decisions made today that future sessions should know about.`,
          note: "Run this before closing any build session. It's 2 minutes that saves you 20 next time."
        }
      },
      {
        id: "m2-l3",
        slug: "claude-md",
        title: "Introducing CLAUDE.md: Your Agent's Memory",
        duration: "8 min",
        concepts: ["Memory system", "Agent instructions", "Consistency", "Context management"],
        body: `
CLAUDE.md is the single most important file you can have in any project.

It's a plain-text file that sits at the root of your project folder. Every time a Claude
agent starts working on your project, it reads this file first. Whatever is in that file
shapes every decision the agent makes.

A good CLAUDE.md covers:
- **Project overview**: what this is in one paragraph
- **Tech stack**: what tools and frameworks are being used
- **File structure**: where things live
- **Rules**: naming conventions, what to avoid, what the coding style is
- **Current status**: what's done, what's in progress
- **Next steps**: the immediate tasks for the next session

The more complete your CLAUDE.md, the less you have to explain every session.
The less you explain, the more you build.

A bloated CLAUDE.md is as bad as no CLAUDE.md. Keep it tight.
One page is ideal. Two pages is fine. Five pages means you need to trim.
        `,
        promptExample: {
          label: "Generate a CLAUDE.md from scratch",
          prompt: `Generate a CLAUDE.md for this project based on the files in the folder.
Include: project overview, tech stack, file structure, current status (Phase 1 complete),
and next steps (Phase 2). Keep it under 60 lines. Use plain English — no jargon.`,
          note: "Run this after your first build session. Then maintain it manually going forward."
        }
      }
    ]
  },

  {
    id: "module-3",
    slug: "claude-code",
    number: 3,
    title: "Module 3 — Claude Code: The Real Build",
    tagline: "Where the fun begins. You direct, Claude builds.",
    duration: "~35 min",
    icon: "🚀",
    color: "from-orange-600 to-rose-500",
    lessons: [
      {
        id: "m3-l1",
        slug: "what-is-claude-code",
        title: "What is Claude Code?",
        duration: "8 min",
        concepts: ["Terminal-native agent", "Codebase awareness", "Autonomous execution", "Permission system"],
        body: `
Claude Code is Anthropic's coding agent that lives in your terminal.

You don't need to understand the terminal. You just need to know that it's the window
where you talk to Claude Code. That's where it does its work.

Unlike a chatbot that suggests code for you to copy-paste, Claude Code:
- Reads your entire project (all files, all folders)
- Writes directly to your files
- Runs commands on your computer
- Checks its own work before reporting back

It's like having a senior developer embedded in your project. You describe what you want.
It figures out which files to change, makes the edits, and tells you what it did.

Two things to know before starting:
1. **It always asks before changing files.** You approve every edit. Nothing happens without you.
2. **CLAUDE.md is its briefing document.** Always have one before starting a session.
        `,
        promptExample: {
          label: "First prompt in a new Claude Code session",
          prompt: `Read the CLAUDE.md. Summarize the current state of the project
in 5 bullet points and tell me what the recommended next step is.`,
          note: "Always start here. It aligns the agent before any work begins."
        }
      },
      {
        id: "m3-l2",
        slug: "plan-mode",
        title: "Plan Mode: Think Before You Build",
        duration: "10 min",
        concepts: ["Plan Mode", "Multi-step tasks", "Reviewing before approving", "Avoiding mistakes"],
        body: `
One of Claude Code's most powerful features is Plan Mode. Before it touches a single file,
it maps out everything it will do, step by step, and waits for your approval.

This is crucial for non-coders. You may not be able to read the code, but you can absolutely
read a plan and spot when something seems off.

Use Plan Mode whenever:
- You're making a significant change (new feature, big refactor)
- You're not 100% sure what the right approach is
- You want to see the AI's reasoning before it acts

How it works:
1. Type /plan before your request
2. Claude reads the relevant files and lays out a step-by-step plan
3. You read the plan and say "looks good" or "change step 2 to..."
4. Claude executes

Fast mode (no /plan) is fine for small tweaks. Plan Mode is for anything that matters.
        `,
        promptExample: {
          label: "Plan Mode example",
          prompt: `/plan Add a dark mode toggle to the navbar. It should:
- Switch between light and dark themes
- Remember the user's preference in localStorage
- Work across all pages
Show me the plan before making any changes.`,
          note: "The /plan flag tells Claude to stop, think, document, and wait. Use it liberally."
        }
      },
      {
        id: "m3-l3",
        slug: "phase-gated-builds",
        title: "Phase-Gated Builds in Practice",
        duration: "10 min",
        concepts: ["Phases", "Scope control", "Incremental building", "Testing each phase"],
        body: `
The single biggest mistake in any build, vibe coded or traditional, is trying to do
everything at once.

Phase-gated building means you agree on a small scope, build just that, test it, confirm
it works, and only then move to the next phase.

A typical phase structure looks like:
- Phase 1: Core scaffold + basic structure
- Phase 2: Key UI components
- Phase 3: Core features
- Phase 4: Integrations (APIs, databases)
- Phase 5: Polish + mobile responsiveness

Why this matters:
- If something breaks, you know exactly when it broke
- You can ship something useful after Phase 1. You don't need to wait for Phase 5
- The AI stays focused. Wide scope = hallucinations and drift.

After each phase: stop, review, test, update CLAUDE.md, then start the next.
Never skip the review step.
        `,
        promptExample: {
          label: "Phase kickoff prompt",
          prompt: `We're starting Phase 2. The goal is to build the following UI components:
[list components]

Rules for this phase:
- Do not touch backend logic
- Do not add new dependencies without asking first
- Use the existing color variables from globals.css

Start with [component 1] and wait for my approval before moving to the next.`,
          note: "Set the scope clearly at the start of every phase. The AI will stay in bounds."
        }
      },
      {
        id: "m3-l4",
        slug: "handoff-packages",
        title: "Handoff Packages and Documentation Artifacts",
        duration: "7 min",
        concepts: ["CLAUDE.md maintenance", "Handoff packages", "Zipping for Claude Code", "Reusable systems"],
        body: `
Professional vibe coders don't just build. They build systems that are easy to hand off,
pick up later, and iterate on with any AI agent.

The goal: anyone (or any AI) should be able to open your project folder, read the CLAUDE.md,
and immediately understand exactly what to do next.

A complete handoff package includes:
- CLAUDE.md (always)
- A brief summary of this session's decisions
- Any new phase plan for the next session
- Notes on anything that got skipped or deprioritized

Treat this like shipping code to a team member who joins tomorrow.
If they can't pick up exactly where you left off, the handoff is incomplete.

The 5-minute investment at the end of every session saves you hours in every future session.
        `,
        promptExample: {
          label: "Full session close prompt",
          prompt: `This session is done. Please:
1. Update CLAUDE.md: mark Phase 2 complete, add Phase 3 scope
2. Write a 5-bullet summary of decisions made this session
3. Note anything left undone or de-prioritized
4. Output a clean "Next Session Kickoff" prompt I can paste at the start of the next session`,
          note: "Copy the kickoff prompt to a notes doc. Paste it verbatim next time. Zero ramp-up."
        }
      }
    ]
  },

  {
    id: "module-4",
    slug: "capstone",
    number: 4,
    title: "Module 4 — Capstone",
    tagline: "Your turn. Pick something you actually want to build.",
    duration: "Open-ended",
    icon: "🎯",
    color: "from-rose-600 to-pink-500",
    lessons: [
      {
        id: "m4-l1",
        slug: "scoping-session",
        title: "The Scoping Session",
        duration: "15 min",
        concepts: ["Idea validation", "Scope definition", "Phase planning", "Picking your stack"],
        body: `
Before you write a single prompt, we scope together.

Pick something real: a tool you wish existed, a side project you've been putting off,
an automation that would save you time. It doesn't have to be big. In fact, smaller is better
for your first build.

Good first projects:
- A personal dashboard that aggregates things you check daily
- A landing page for something you're working on
- A simple web app that does one thing really well
- An automation that replaces a repetitive manual task

Bad first projects:
- "An Uber for X" (too broad, too complex)
- Anything requiring payments or user accounts on Day 1
- "A social network" (just... no)

In this session, we'll fill out your scoping template together and turn it into a
Phase 1 plan and CLAUDE.md that you can immediately hand off to Claude Code.
        `,
        promptExample: {
          label: "Scoping template: fill this in",
          prompt: `Project name:
What it does (one sentence):
Who uses it:
Core features for Phase 1 (max 3):
-
-
-
Explicitly out of scope:
-
Tech stack: [React, plain HTML, Python script — pick simple]
Definition of done for Phase 1: [how will you know it works?]`,
          note: "Fill this out before touching any tool. Review it with someone else if possible."
        }
      }
    ]
  }
]

// Helpers
export const getModuleBySlug = (slug) => modules.find((m) => m.slug === slug)
export const getModuleById = (id) => modules.find((m) => m.id === id)
export const getLessonBySlug = (moduleSlug, lessonSlug) => {
  const module = getModuleBySlug(moduleSlug)
  return module?.lessons.find((l) => l.slug === lessonSlug)
}
export const getCourseStats = () => ({
  totalModules: modules.length,
  totalLessons: modules.reduce((acc, m) => acc + m.lessons.length, 0),
})
