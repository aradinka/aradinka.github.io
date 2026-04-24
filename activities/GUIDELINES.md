# Activities Guidelines

Design system and content patterns extracted from emilkowal.ski's activities. Use these guidelines when creating new articles to maintain consistency.

---

## Article Structure

Every article follows this flow:

```
1. Back navigation (← Azka Radinka)
2. Title (h1) + subtitle
3. Opening hook (1-2 paragraphs establishing the topic)
4. Main sections (h2 headings, each a self-contained idea)
   └── Subsections (h3 headings for detail within a section)
5. Footer navigation (← Previous / Next →)
```

### Opening Patterns

- **Technical articles**: Start with the project's impact/context, then state what this article explores. _"I created Sonner in 2023. It now receives over 40 million weekly npm downloads..."_
- **Essay articles**: Start with an analogy or surprising comparison. _"When cars first emerged, consumers ignored color and silhouette because horses were the competition."_
- **Tutorial articles**: Start with the property/tool and why it matters. _"clip-path is often used for trimming DOM nodes into specific shapes, but it also enables powerful animations."_

### Section Sizing

- Keep sections focused on one idea
- Sections typically contain 2-4 paragraphs + an optional code block or demo
- Use `<hr>` (horizontal rule) to separate major topic shifts within an article

---

## Rich Content Elements

### Code Blocks

Use for any code snippet 2+ lines. Always include a language label.

```html
<div class="code-block">
  <span class="code-block-label">CSS</span>
  <pre><code>.element {
  clip-path: inset(0 0 100% 0);
  animation: reveal 1s forwards;
}</code></pre>
</div>
```

**Language labels used**: CSS, JSX, JavaScript, TSX, Shell, HTML

**When to use code blocks**:
- Implementation details that readers should be able to copy
- Before/after comparisons of approaches
- API examples showing usage patterns

**Code block captions**: Use `<span class="code-caption">` after a code block for explanatory notes.

### Inline Code

Use `<code>` for:
- CSS property names: `clip-path`, `transform-origin`
- Function/method names: `toast()`, `useInView`
- Component names: `<Toaster />`, `<Drawer.Root>`
- Values: `scale(0.97)`, `ease-out`, `300ms`
- File names, npm packages

### Blockquotes

Two styles:

**Standard blockquote** — attributed wisdom or referenced text:
```html
<blockquote>
  <p>"Quote text here."</p>
  <span class="quote-attribution">— Author Name, <em>Source</em></span>
</blockquote>
```

**Pull quote** — a key insight centered and enlarged:
```html
<blockquote class="pull-quote">
  <p>"In a world of scarcity, we treasure tools..."</p>
  <span class="quote-attribution">— Author</span>
</blockquote>
```

**When to use quotes**:
- Pull quotes: Once per article max, for the most important insight
- Standard quotes: When citing specific people or sources
- Favorite pattern: Paul Graham, Steve Jobs, or industry practitioners

### Tables

Use for structured reference data — comparisons, guidelines, tip collections.

```html
<div class="table-wrapper">
  <table>
    <thead><tr><th>Scenario</th><th>Solution</th></tr></thead>
    <tbody><tr><td>...</td><td>...</td></tr></tbody>
  </table>
</div>
```

**When to use**: Quick-reference guides, duration/easing lookups, problem/solution pairs.

### Demo Placeholders

For interactive elements that can't be rendered in static HTML:

```html
<div class="demo-placeholder">
  <span class="demo-label">Interactive Demo</span>
  <span class="demo-description">Describe what the demo shows and how users would interact with it.</span>
</div>
```

### Flowcharts / ASCII Art

For decision trees and visual logic:

```html
<div class="flowchart">
<pre>Is the element entering or exiting?
├── Yes → ease-out
└── No → ease-in-out</pre>
</div>
```

### Definition Blocks

For term definitions with etymology:

```html
<div class="definition-block">
  <div class="term">word</div>
  <div class="phonetic">/pronunciation/</div>
  <div class="part-of-speech">Noun</div>
  <div class="etymology">Origin info</div>
  <ol><li>Definition 1</li></ol>
</div>
```

### Footnotes

Use sparingly for references, credits, and tangential notes:

```html
<!-- In text -->
<sup><a href="#fn1" id="ref1">1</a></sup>

<!-- At bottom of article-content -->
<div class="footnotes">
  <ol>
    <li id="fn1">Note text. <a href="#ref1">↑</a></li>
  </ol>
</div>
```

### Lists

- **Unordered lists**: For features, benefits, characteristics
- **Ordered lists**: For steps, ranked items, numbered rules (like typography rules)
- Use `<strong>` for list item labels when each item has a name + description

---

## Voice & Tone

### Principles

1. **Direct and confident**: State opinions clearly. _"CSS transitions offer superior functionality"_ not _"CSS transitions might be better."_
2. **Personal but not casual**: Use "I" for experience. Use "we" or "you" when teaching. Avoid slang.
3. **Show, don't just tell**: Every concept gets a code example, demo, or visual. Never explain without demonstrating.
4. **Acknowledge complexity honestly**: _"This is the most advanced example. Don't feel bad if you don't understand it!"_
5. **Credit others**: Name people, link sources. _"Credit to Paco's tweet"_, _"Based on Julie Zhuo's article"_.

### Writing Patterns

- **Bridge to real world**: Connect technical concepts to physical analogies. _"Just like a balloon, even when deflated it has a visible shape."_
- **Challenge assumptions**: _"You Don't Need Animations"_, _"Settling for good enough is not good enough."_
- **End sections with insight**: Don't let sections trail off. End with a takeaway or transition.
- **Subtitles as hooks**: Description should intrigue, not summarize. _"One of the most underrated CSS properties"_ not _"An article about clip-path."_

### Sentence Style

- Short sentences preferred. Long explanations broken into multiple sentences.
- Technical terms in `code` formatting on first use.
- Em dashes (—) for asides, not parentheses.
- Italics for emphasis on key words, not bold (bold is for labels/names).

---

## Typography & Spacing

| Element | Spec |
|---------|------|
| Container | max-width: 692px, centered |
| Body font | System font stack, 16px, line-height 1.5 |
| H1 (title) | 28-32px, weight 600, letter-spacing -0.02em |
| H2 | 20px, weight 600, margin-top 48px |
| H3 | 17px, weight 600, margin-top 32px |
| Paragraphs | color: text-secondary, line-height 1.7, margin-bottom 24px |
| Code blocks | 13px monospace, high-contrast background, 10px border-radius |
| Inline code | 14px monospace, subtle background, 4px border-radius |

---

## Color Variables

Articles use a single light theme powered by CSS variables:
- `--bg`, `--bg-secondary` for backgrounds
- `--text-primary`, `--text-secondary` for text
- `--border` for dividers
- `--code-bg`, `--code-text` for code blocks
- `--code-inline-bg` for inline code

---

## Adding a New Article

1. Copy any existing article HTML file as a template
2. Update `<title>`, `<meta description>`, heading, and subtitle
3. Write content using the elements documented above
4. Update previous/next navigation links in the footer
5. Add a link in `index.html` under the Activities section:
   ```html
   <a class="link-item" href="activities/your-slug.html">
      <span class="link-item-title">Article Title</span>
      <span class="link-item-desc">Intriguing subtitle as a hook.</span>
   </a>
   ```

---

## Content Archetypes

### Technical Deep-Dive (e.g., Building a Toast Component)
- Focus: How something was built, decisions made, code shown
- Rich elements: Many code blocks, demo placeholders, subsections
- Quotes: One closing quote for reflection
- Length: Long (8-12 sections)

### CSS/Animation Tutorial (e.g., The Magic of Clip Path)
- Focus: Teaching a technique through progressive examples
- Rich elements: Code blocks building on each other, interactive demos, real-world examples
- Pattern: Basics → Advanced → Real-world applications
- Length: Medium-long (6-10 sections)

### Essay/Opinion (e.g., Developing Taste)
- Focus: Ideas, philosophy, career advice
- Rich elements: Pull quotes, footnotes, minimal/no code
- Pattern: Thesis → Supporting arguments → Call to practice
- Length: Short-medium (3-5 sections)

### Reference/Guide (e.g., Agents with Taste)
- Focus: Practical rules and decision frameworks
- Rich elements: Tables, flowcharts, numbered lists, code fences
- Pattern: Context → Rules/tables → How to use them
- Length: Medium (4-7 sections)
