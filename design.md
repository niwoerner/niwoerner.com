# Design Document: niwoerner.com

Personal knowledge-sharing site with blog posts and occasional interactive playgrounds.

---

## Design Principles

- **Simple:** Minimal UI, content-first
- **Generous:** Large post cards, ample whitespace (infrequent publishing)
- **Flexible:** Support both prose-only and split-view layouts
- **Consistent:** Use existing ShadCN components and theme tokens

---

## Theme Reference

- **Primary:** Orange/amber (`oklch(0.646 0.222 41.116)`)
- **Radius:** `0.875rem` base, rounded aesthetic
- **Fonts:** Nunito Sans (body), Geist Mono (code)
- **Mode:** Light/dark via CSS variables

---

## Wireframe 1: Landing Page

```
┌────────────────────────────────────────────────────────────────────┐
│                                                                    │
│  [Logo/Name]                                    [Theme Toggle]     │
│                                                                    │
├────────────────────────────────────────────────────────────────────┤
│                                                                    │
│                                                                    │
│     Hi, I'm Nicolas.                                               │
│     I write about [topic], [topic], and [topic].                   │
│                                                                    │
│                                                                    │
├────────────────────────────────────────────────────────────────────┤
│                                                                    │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │                                                              │  │
│  │  Building a Real-Time Sync Engine                            │  │
│  │                                                              │  │
│  │  How I approached building offline-first sync for a          │  │
│  │  collaborative app, including conflict resolution and        │  │
│  │  the tradeoffs I discovered along the way.                   │  │
│  │                                                              │  │
│  │  December 20, 2024  •  8 min read                            │  │
│  │                                                              │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                                                    │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │                                                              │  │
│  │  Understanding OKLCH Color Space                             │  │
│  │                                                              │  │
│  │  A practical guide to perceptual color in CSS, with          │  │
│  │  interactive examples showing why it matters.                │  │
│  │                                                              │  │
│  │  November 15, 2024  •  5 min read                            │  │
│  │                                                              │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                                                    │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │                                                              │  │
│  │  Why I Switched to Neovim                                    │  │
│  │                                                              │  │
│  │  After years with VS Code, I made the jump. Here's what      │  │
│  │  worked, what didn't, and my current setup.                  │  │
│  │                                                              │  │
│  │  October 3, 2024  •  12 min read                             │  │
│  │                                                              │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

### Landing Page Structure

| Section | Content |
|---------|---------|
| Header | Logo/name (left), theme toggle (right) |
| Intro | 2-3 lines, personal greeting + topics |
| Post List | Full-width cards, vertically stacked |

### Post Card Anatomy

```
┌──────────────────────────────────────────┐
│  Title (H2, bold)                        │
│                                          │
│  Excerpt (2-3 lines, muted color)        │
│                                          │
│  Date  •  Read time (small, muted)       │
└──────────────────────────────────────────┘
```

- Uses existing `Card` component
- Generous padding (`p-6` or `p-8`)
- Hover state: subtle background change or border highlight
- Clickable entire card (link wrapper)

---

## Wireframe 2: Post Page

### Variant A: Standard (Text Only)

```
┌────────────────────────────────────────────────────────────────────┐
│  [← Back]                                       [Theme Toggle]     │
├────────────────────────────────────────────────────────────────────┤
│                                                                    │
│     Building a Real-Time Sync Engine                               │
│                                                                    │
│     December 20, 2024  •  8 min read                               │
│                                                                    │
│  ───────────────────────────────────────────────────────────────   │
│                                                                    │
│     When I started building the sync layer for [app], I had        │
│     no idea how deep the rabbit hole went. This is the story       │
│     of what I learned.                                             │
│                                                                    │
│     ## The Problem                                                 │
│                                                                    │
│     Collaborative apps need to handle a fundamental tension:       │
│     users expect instant feedback, but data lives on a server.     │
│                                                                    │
│     ```typescript                                                  │
│     async function saveDocument(doc: Document) {                   │
│       const response = await api.save(doc);                        │
│       return response.data;                                        │
│     }                                                              │
│     ```                                                            │
│                                                                    │
│     ## A Better Model                                              │
│                                                                    │
│     The key insight is separating "optimistic state" from          │
│     "confirmed state"...                                           │
│                                                                    │
│  ───────────────────────────────────────────────────────────────   │
│                                                                    │
│  [← Previous Post]                              [Next Post →]      │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

### Variant B: Split View (Text + Interactive)

```
┌────────────────────────────────────────────────────────────────────┐
│  [← Back]                                       [Theme Toggle]     │
├────────────────────────────────────────────────────────────────────┤
│                                                                    │
│     Understanding OKLCH Color Space                                │
│                                                                    │
│     November 15, 2024  •  5 min read                               │
│                                                                    │
│  ───────────────────────────────────────────────────────────────   │
│                                                                    │
│     Color on the web has always been tricky. sRGB doesn't          │
│     match how we perceive brightness...                            │
│                                                                    │
├────────────────────────────────┬───────────────────────────────────┤
│                                │                                   │
│  ## How Lightness Works        │  ┌─────────────────────────────┐  │
│                                │  │                             │  │
│  In OKLCH, the L value         │  │   [Interactive Playground]  │  │
│  represents perceived          │  │                             │  │
│  lightness. Unlike HSL,        │  │   L: [====●=====] 0.65      │  │
│  changing only the hue         │  │   C: [===●======] 0.15      │  │
│  keeps brightness constant.    │  │   H: [======●===] 180°      │  │
│                                │  │                             │  │
│  Try adjusting the sliders     │  │   ┌─────────────────────┐   │  │
│  to see how each parameter     │  │   │  Color Preview      │   │  │
│  affects the color.            │  │   └─────────────────────┘   │  │
│                                │  │                             │  │
│                                │  │   oklch(0.65 0.15 180)      │  │
│                                │  │                             │  │
│                                │  └─────────────────────────────┘  │
│                                │                                   │
├────────────────────────────────┴───────────────────────────────────┤
│                                                                    │
│     ## Practical Application                                       │
│                                                                    │
│     Now that we understand the theory, let's look at how to        │
│     use OKLCH in your CSS...                                       │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

### Split View Content Flow

```
┌──────────────────────────────────────┐
│  Full-width prose                    │  ← Standard markdown
└──────────────────────────────────────┘
                 ↓
┌───────────────────┬──────────────────┐
│  Prose (left)     │  Playground      │  ← Split section
│                   │  (right, sticky) │
└───────────────────┴──────────────────┘
                 ↓
┌──────────────────────────────────────┐
│  Full-width prose continues          │  ← Back to standard
└──────────────────────────────────────┘
                 ↓
┌───────────────────┬──────────────────┐
│  Another split    │  Code example    │  ← Another split
└───────────────────┴──────────────────┘
```

### Split Section Behavior

- **Desktop:** Two columns, right panel sticky
- **Mobile:** Stacked vertically (prose first, then playground)
- **Right panel contents:** Interactive component, code block, image, or diagram

---

## Component Inventory

### Existing ShadCN Components (Use As-Is)

| Component | Usage |
|-----------|-------|
| Card | Post cards on landing, playground containers |
| Button | Theme toggle, navigation, back link |
| Separator | Dividers between sections |

### New Components to Create

| Component | Purpose | Based On |
|-----------|---------|----------|
| `Header` | Site header with logo + theme toggle | Layout |
| `PostCard` | Clickable post entry for landing | Card |
| `PostHeader` | Title + date + read time | Typography |
| `Prose` | Styled markdown content wrapper | CSS |
| `SplitSection` | Two-column layout wrapper | CSS Grid |
| `Playground` | Interactive demo container | Card (optional) |
| `PostNavigation` | Previous/Next post links | Button |
| `ThemeToggle` | Dark/light mode switch | Button |

---

## Typography Scale

| Element | Size | Weight | Color |
|---------|------|--------|-------|
| Post title (landing) | `text-2xl` | `font-bold` | `foreground` |
| Post title (page) | `text-4xl` | `font-bold` | `foreground` |
| Excerpt | `text-base` | `font-normal` | `muted-foreground` |
| Meta (date, read time) | `text-sm` | `font-normal` | `muted-foreground` |
| Body prose | `text-base` | `font-normal` | `foreground` |
| Code blocks | `text-sm` | `font-mono` | Custom syntax theme |

---

## Responsive Breakpoints

| Breakpoint | Landing | Post (standard) | Post (split) |
|------------|---------|-----------------|--------------|
| Mobile (<640px) | Single column, smaller cards | Full width prose | Stacked (prose → playground) |
| Tablet (640-1024px) | Single column | Constrained width | Stacked or narrow split |
| Desktop (>1024px) | Single column, max-width container | Constrained width | Side-by-side split |

---

## Interaction States

### Post Card (Landing)

- **Default:** Background `card`, border `border`
- **Hover:** Background `accent` or border `primary`
- **Focus:** Ring `ring`

### Navigation Links

- **Default:** Text `muted-foreground`
- **Hover:** Text `foreground`, underline
- **Active:** Text `primary`

---

## Open Decisions

1. **Split view sticky behavior:** Should right panel stay fixed while scrolling left text?
2. **Mobile split:** Stack vertically or use accordion/tabs?
3. **Syntax highlighting:** Shiki vs Prism vs other?
4. **Content format:** MDX vs plain markdown with custom components?
