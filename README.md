# niwoerner.com

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding a New Post

Create a new `.mdx` file in `content/posts/`:

```
content/posts/your-post-slug.mdx
```

### Frontmatter Format

Every post must start with frontmatter:

```mdx
---
title: Your Post Title
excerpt: A brief description shown on the homepage.
date: 2024-12-25
---

Your content here...
```

| Field | Required | Description |
|-------|----------|-------------|
| `title` | Yes | Post title |
| `excerpt` | Yes | Short description for post card |
| `date` | Yes | Publication date (YYYY-MM-DD) |

### Markdown Support

Standard markdown is supported:

- **Headings:** `## H2`, `### H3`
- **Lists:** `-` or `1.`
- **Code blocks:** Triple backticks with language
- **Links:** `[text](url)`
- **Bold/Italic:** `**bold**`, `*italic*`

### Text Styling Options

| Syntax | Renders as | Style |
|--------|------------|-------|
| `*italic*` | *italic* | Italic text |
| `**bold**` | **bold** | Bold text |
| `***bold italic***` | ***bold italic*** | Bold + italic |
| `[link](url)` | link | Primary (orange) color |
| `` `code` `` | `code` | Gray bg, monospace, smaller |
| `_emphasis_` | _emphasis_ | Italic (same as `*`) |
| `<Mark>text</Mark>` | highlighted | Subtle primary bg tint |

### Highlight Component

Use `<Mark>` for inline text emphasis with a subtle primary background:

```mdx
We stayed in contact, and <Mark>I told Juraci</Mark> about my interest.
```

### Code Blocks

````mdx
```typescript
function example(): string {
  return "Hello";
}
```
````

### Split View (Interactive Sections)

For posts with interactive examples, use the `SplitSection` component:

```mdx
<SplitSection>
  <SplitContent>
    Text explaining the concept...
  </SplitContent>
  <SplitPlayground>
    <YourInteractiveComponent />
  </SplitPlayground>
</SplitSection>
```

- **Desktop:** Side-by-side layout (text left, playground right)
- **Mobile:** Stacked vertically

## Project Structure

```
app/
├── page.tsx              # Landing page
├── layout.tsx            # Root layout
├── globals.css           # Theme + styles
└── posts/[slug]/
    └── page.tsx          # Post page

components/
├── ui/                   # ShadCN components
├── header.tsx            # Site header
├── post-card.tsx         # Post card for listing
├── post-header.tsx       # Post title + meta
├── prose.tsx             # Markdown content wrapper
├── split-section.tsx     # Two-column layout
└── theme-toggle.tsx      # Dark mode toggle

content/
└── posts/                # MDX blog posts
    └── *.mdx

lib/
└── posts.ts              # Post utilities
```

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4, ShadCN
- **Content:** MDX with remark plugins
- **Theme:** Light/dark mode via next-themes
