# Technical Specification - Portfolio Website

## Component Inventory

### shadcn/ui Components (Built-in)
| Component | Purpose | Customization |
|-----------|---------|---------------|
| Button | CTAs, actions | Custom gradient variant |
| Card | Project cards, feature cards | Dark theme, custom borders |
| Badge | Status indicators, tags | Custom colors |
| Separator | Visual dividers | Subtle opacity |

### Custom Components to Build
| Component | Purpose | Location |
|-----------|---------|----------|
| Navbar | Fixed navigation | `src/components/Navbar.tsx` |
| GlowEffect | Reusable glow backdrop | `src/components/GlowEffect.tsx` |
| BentoCard | Grid card for hero section | `src/components/BentoCard.tsx` |
| FeatureCard | Skill/feature display card | `src/components/FeatureCard.tsx` |
| ProjectCard | Project showcase card | `src/components/ProjectCard.tsx` |
| PulsingDot | Animated availability indicator | `src/components/PulsingDot.tsx` |
| CopyButton | Email copy functionality | `src/components/CopyButton.tsx` |
| SocialLinks | Social media link row | `src/components/SocialLinks.tsx` |

### Section Components
| Section | File | Description |
|---------|------|-------------|
| Hero | `src/sections/Hero.tsx` | Main hero with Bento grid |
| Features | `src/sections/Features.tsx` | Skills as feature cards |
| Projects | `src/sections/Projects.tsx` | Project case studies |
| Contact | `src/sections/Contact.tsx` | Footer with contact info |

## Animation Implementation Table

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| Page load fade-in | Framer Motion | `motion.div` with initial/animate props | Low |
| Hero title reveal | Framer Motion | Staggered children with `variants` | Medium |
| Bento grid stagger | Framer Motion | `staggerChildren` in parent variant | Medium |
| Scroll-triggered reveals | Framer Motion | `whileInView` with `viewport` options | Medium |
| Card hover glow | CSS + Tailwind | `group-hover` with transition classes | Low |
| Card lift on hover | CSS + Tailwind | `hover:-translate-y-1` transition | Low |
| Pulsing dot | CSS Keyframes | `@keyframes pulse` animation | Low |
| Gradient pulse | CSS Keyframes | Opacity animation on gradient element | Low |
| Button hover scale | CSS + Tailwind | `hover:scale-[1.02]` transition | Low |
| Link underline | CSS | `::after` pseudo-element width animation | Low |
| Copy feedback | React State | State toggle with setTimeout | Low |

## Animation Library Choices

### Primary: Framer Motion
- **Rationale**: Best React integration, declarative API, excellent performance
- **Use for**: All entrance animations, scroll-triggered reveals, stagger effects

### Secondary: CSS/Tailwind
- **Rationale**: Better performance for simple hover states, no JS overhead
- **Use for**: Hover effects, transitions, simple transforms

### CSS Keyframes
- **Rationale**: Infinite animations (pulsing, gradients)
- **Use for**: Pulsing dot, gradient pulse

## Project File Structure

```
/mnt/okcomputer/output/app/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── GlowEffect.tsx
│   │   ├── BentoCard.tsx
│   │   ├── FeatureCard.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── PulsingDot.tsx
│   │   ├── CopyButton.tsx
│   │   └── SocialLinks.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   ├── hooks/
│   │   └── useCopyToClipboard.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

## Dependencies to Install

### Core (via init script)
- React 18+
- TypeScript
- Vite
- Tailwind CSS 3.4+
- shadcn/ui components

### Additional
```bash
npm install framer-motion lucide-react
```

## Technical Notes

### Performance Considerations
- Use `will-change: transform` on animated elements
- Prefer `transform` and `opacity` for animations
- Use `viewport={{ once: true }}` for scroll animations
- Implement `prefers-reduced-motion` support

### Accessibility
- All interactive elements keyboard accessible
- Proper focus states
- Semantic HTML structure
- ARIA labels where needed

### Responsive Strategy
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Bento grid: 2 cols mobile, 4 cols desktop
- Feature cards: 1 col mobile, 2 cols desktop
