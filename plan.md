# Implementation Plan: niwoerner.com

Step-by-step implementation of the blog/knowledge-sharing site.

---

## Phase 1: Foundation

### 1.1 Content Infrastructure

- [ ] Install MDX support (`@next/mdx`, `@mdx-js/loader`, `@mdx-js/react`)
- [ ] Configure `next.config.ts` for MDX
- [ ] Create `content/posts/` directory for blog posts
- [ ] Create post metadata type (`title`, `excerpt`, `date`, `readTime`, `slug`)
- [ ] Create utility to read and parse posts from filesystem

### 1.2 Theme Toggle

- [ ] Install `next-themes` for dark mode management
- [ ] Create `ThemeProvider` wrapper component
- [ ] Create `ThemeToggle` component (using existing Button)
- [ ] Add provider to root layout

---

## Phase 2: Layout Components

### 2.1 Header

- [ ] Create `components/header.tsx`
- [ ] Logo/site name (left)
- [ ] Theme toggle (right)
- [ ] Sticky positioning with backdrop blur
- [ ] Responsive padding

### 2.2 Page Container

- [ ] Create `components/container.tsx`
- [ ] Max-width constraint (`max-w-3xl` or `max-w-4xl`)
- [ ] Centered with horizontal padding
- [ ] Reusable across all pages

---

## Phase 3: Landing Page

### 3.1 Intro Section

- [ ] Create `components/intro.tsx`
- [ ] Heading with name
- [ ] Subtext with topics
- [ ] Generous vertical spacing

### 3.2 Post Card

- [ ] Create `components/post-card.tsx`
- [ ] Extend existing Card component
- [ ] Props: `title`, `excerpt`, `date`, `readTime`, `slug`
- [ ] Link wrapper (entire card clickable)
- [ ] Hover state styling

### 3.3 Post List

- [ ] Create `components/post-list.tsx`
- [ ] Fetch posts sorted by date (descending)
- [ ] Map to PostCard components
- [ ] Separator between cards (optional)

### 3.4 Landing Page Assembly

- [ ] Update `app/page.tsx`
- [ ] Compose: Header → Intro → PostList
- [ ] Add metadata (title, description)

---

## Phase 4: Post Page

### 4.1 Post Header

- [ ] Create `components/post-header.tsx`
- [ ] Back link (← Back to home)
- [ ] Title (large)
- [ ] Meta line (date • read time)
- [ ] Separator below

### 4.2 Prose Styling

- [ ] Create `components/prose.tsx` or use Tailwind Typography plugin
- [ ] Style headings, paragraphs, lists, blockquotes
- [ ] Code block styling (inline and fenced)
- [ ] Link styling

### 4.3 Post Navigation

- [ ] Create `components/post-navigation.tsx`
- [ ] Previous/Next post links
- [ ] Handle edge cases (first/last post)
- [ ] Use existing Button component

### 4.4 Dynamic Route

- [ ] Create `app/posts/[slug]/page.tsx`
- [ ] Load post by slug
- [ ] Generate static params for all posts
- [ ] Compose: Header → PostHeader → Content → PostNavigation

---

## Phase 5: Split View

### 5.1 Split Section Component

- [ ] Create `components/split-section.tsx`
- [ ] CSS Grid: `grid-cols-1 lg:grid-cols-2`
- [ ] Left column: prose content
- [ ] Right column: sticky container for playground
- [ ] Gap between columns

### 5.2 Playground Container

- [ ] Create `components/playground.tsx`
- [ ] Optional Card wrapper
- [ ] Sticky positioning (`sticky top-24`)
- [ ] Accepts children (any React component)

### 5.3 MDX Integration

- [ ] Create MDX component mappings
- [ ] Map `<SplitSection>` for use in MDX
- [ ] Map `<Playground>` for use in MDX
- [ ] Example usage in a test post

---

## Phase 6: Code Syntax Highlighting

### 6.1 Setup

- [ ] Choose highlighter (recommend: Shiki for static, Prism for client)
- [ ] Install dependencies
- [ ] Configure with MDX

### 6.2 Code Block Component

- [ ] Create `components/code-block.tsx`
- [ ] Language detection
- [ ] Line numbers (optional)
- [ ] Copy button (optional, future)
- [ ] Theme matching site dark/light mode

---

## Phase 7: Polish

### 7.1 Metadata & SEO

- [ ] Add Open Graph tags
- [ ] Add Twitter card tags
- [ ] Generate sitemap
- [ ] Add robots.txt

### 7.2 Performance

- [ ] Optimize fonts (already using next/font)
- [ ] Image optimization (if adding images later)
- [ ] Verify Core Web Vitals

### 7.3 Accessibility

- [ ] Keyboard navigation
- [ ] Skip link to main content
- [ ] Proper heading hierarchy
- [ ] Color contrast verification

---

## File Structure (Target)

```
app/
├── layout.tsx              # Root layout with providers
├── page.tsx                # Landing page
├── globals.css             # Theme tokens
└── posts/
    └── [slug]/
        └── page.tsx        # Individual post page

components/
├── ui/                     # ShadCN components (existing)
├── header.tsx
├── container.tsx
├── intro.tsx
├── post-card.tsx
├── post-list.tsx
├── post-header.tsx
├── post-navigation.tsx
├── prose.tsx
├── split-section.tsx
├── playground.tsx
├── code-block.tsx
└── theme-toggle.tsx

content/
└── posts/
    ├── building-sync-engine.mdx
    ├── understanding-oklch.mdx
    └── why-neovim.mdx

lib/
├── utils.ts                # Existing utilities
└── posts.ts                # Post fetching/parsing utilities
```

---

## Dependencies to Add

```bash
# MDX support
npm install @next/mdx @mdx-js/loader @mdx-js/react

# Theme management
npm install next-themes

# Syntax highlighting (choose one)
npm install shiki          # Static/build-time
# OR
npm install prism-react-renderer  # Client-side

# Optional: Typography plugin
npm install @tailwindcss/typography
```

---

## Milestones

| Milestone | Phases | Deliverable |
|-----------|--------|-------------|
| M1: Static Site | 1-4 | Landing + post pages with hardcoded content |
| M2: MDX Content | 1, 4 | Posts loaded from `.mdx` files |
| M3: Split View | 5 | Interactive playground support |
| M4: Syntax | 6 | Code blocks with highlighting |
| M5: Production | 7 | SEO, performance, accessibility |

---

## Unresolved Questions

1. **Sticky behavior:** Should split view right panel be `sticky` or `fixed`?
2. **Mobile split:** Stack vertically or collapse to accordion?
3. **Syntax theme:** Match site theme or use popular theme (e.g., GitHub, One Dark)?
4. **Content source:** Local MDX files or consider CMS later?
