# Design System Documentation

## Overview

This document outlines the design system for the Laws of UX website. It serves as the single source of truth for all design decisions and should be referenced by agents when making changes to the codebase.

## Design Principles

1. **Clarity**: Every element should have a clear purpose and be easily understandable
2. **Consistency**: Maintain consistent patterns across all components and pages
3. **Accessibility**: Ensure the site is accessible to all users
4. **Performance**: Optimize for fast loading and smooth interactions
5. **Maintainability**: Design with future changes and scalability in mind

## Color System

### Primary Colors
- Primary: `#2563EB` (Blue)
- Secondary: `#4F46E5` (Indigo)
- Accent: `#F59E0B` (Amber)

### Neutral Colors
- Background: `#FFFFFF` (White)
- Surface: `#F8FAFC` (Light Gray)
- Text: `#1E293B` (Dark Gray)
- Muted Text: `#64748B` (Gray)

## Typography

### Font Families
- Primary: Inter
- Secondary: Roboto Mono (for code blocks)

### Type Scale
- H1: 2.5rem (40px)
- H2: 2rem (32px)
- H3: 1.5rem (24px)
- Body: 1rem (16px)
- Small: 0.875rem (14px)

## Spacing System

We use an 8px grid system:
- 4px (0.25rem)
- 8px (0.5rem)
- 16px (1rem)
- 24px (1.5rem)
- 32px (2rem)
- 48px (3rem)
- 64px (4rem)

## Component Guidelines

### Buttons
- Primary: Solid background with white text
- Secondary: Outline with primary color
- Size variations: Small (32px), Medium (40px), Large (48px)
- Padding: Horizontal 16px, Vertical 8px
- Border radius: 4px

### Cards
- Background: Surface color
- Border radius: 8px
- Shadow: 0 1px 3px rgba(0, 0, 0, 0.1)
- Padding: 24px

### Forms
- Input height: 40px
- Border radius: 4px
- Border color: #E2E8F0
- Focus state: 2px primary color outline

## Layout Patterns

### Grid System
- 12-column grid
- Max-width: 1200px
- Gutter width: 24px
- Breakpoints:
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px

## Interaction Patterns

### Hover States
- Buttons: 10% darker shade
- Links: Underline
- Cards: Slight elevation increase

### Transitions
- Duration: 200ms
- Timing: ease-in-out
- Properties: opacity, transform, background-color

## Accessibility Guidelines

1. All interactive elements must be keyboard accessible
2. Color contrast ratio must meet WCAG 2.1 AA standards
3. All images must have alt text
4. Form inputs must have associated labels
5. Focus states must be visible 