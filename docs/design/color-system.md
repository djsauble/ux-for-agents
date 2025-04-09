# Color System

## Overview
The color system is designed to be accessible, maintainable, and consistent across both light and dark modes. It follows WCAG 2.1 guidelines for contrast ratios and includes semantic color naming for better maintainability.

## Color Palette

### Primary Colors
- Primary: `#3B82F6` (Blue 500)
  - Light mode: Used for primary actions and key interactive elements
  - Dark mode: Used for primary actions and key interactive elements
- Primary Dark: `#2563EB` (Blue 600)
  - Light mode: Hover states for primary elements
  - Dark mode: Hover states for primary elements
- Primary Light: `#60A5FA` (Blue 400)
  - Light mode: Secondary actions and subtle highlights
  - Dark mode: Secondary actions and subtle highlights

### Neutral Colors
- Background
  - Light mode: `#FFFFFF`
  - Dark mode: `#111827`
- Surface
  - Light mode: `#F9FAFB`
  - Dark mode: `#1F2937`
- Surface Elevated
  - Light mode: `#F3F4F6`
  - Dark mode: `#374151`
- Border
  - Light mode: `#E5E7EB`
  - Dark mode: `#4B5563`

### Text Colors
- Primary Text
  - Light mode: `#111827`
  - Dark mode: `#F9FAFB`
- Secondary Text
  - Light mode: `#4B5563`
  - Dark mode: `#D1D5DB`
- Tertiary Text
  - Light mode: `#6B7280`
  - Dark mode: `#9CA3AF`

### Semantic Colors
- Success
  - Light mode: `#10B981` (Green 500)
  - Dark mode: `#34D399` (Green 400)
- Warning
  - Light mode: `#F59E0B` (Amber 500)
  - Dark mode: `#FBBF24` (Amber 400)
- Error
  - Light mode: `#EF4444` (Red 500)
  - Dark mode: `#F87171` (Red 400)
- Info
  - Light mode: `#3B82F6` (Blue 500)
  - Dark mode: `#60A5FA` (Blue 400)

## Usage Guidelines

### Contrast Requirements
- Text on background must maintain a minimum contrast ratio of 4.5:1
- Large text (18pt or 14pt bold) must maintain a minimum contrast ratio of 3:1
- Interactive elements must maintain a minimum contrast ratio of 3:1

### Color Application
1. **Background Colors**
   - Use background colors for the main canvas
   - Surface colors for cards and elevated elements
   - Surface elevated for nested or floating elements

2. **Text Colors**
   - Primary text for main content
   - Secondary text for supporting content
   - Tertiary text for metadata and less important information

3. **Interactive Elements**
   - Primary color for main CTAs
   - Primary dark for hover states
   - Primary light for secondary actions

4. **Semantic Colors**
   - Use consistently for their intended purposes
   - Success for positive outcomes
   - Warning for cautionary messages
   - Error for critical issues
   - Info for neutral information

## Implementation Notes

### CSS Variables
```css
:root {
  /* Light mode */
  --color-primary: #3B82F6;
  --color-primary-dark: #2563EB;
  --color-primary-light: #60A5FA;
  
  --color-background: #FFFFFF;
  --color-surface: #F9FAFB;
  --color-surface-elevated: #F3F4F6;
  --color-border: #E5E7EB;
  
  --color-text-primary: #111827;
  --color-text-secondary: #4B5563;
  --color-text-tertiary: #6B7280;
  
  --color-success: #10B981;
  --color-warning: #F59E0B;
  --color-error: #EF4444;
  --color-info: #3B82F6;
}

[data-theme="dark"] {
  --color-background: #111827;
  --color-surface: #1F2937;
  --color-surface-elevated: #374151;
  --color-border: #4B5563;
  
  --color-text-primary: #F9FAFB;
  --color-text-secondary: #D1D5DB;
  --color-text-tertiary: #9CA3AF;
  
  --color-success: #34D399;
  --color-warning: #FBBF24;
  --color-error: #F87171;
  --color-info: #60A5FA;
}
```

### Theme Switching
- Implement theme switching using the `data-theme` attribute
- Store user preference in localStorage
- Respect system preference by default
- Provide manual toggle option

## Accessibility Considerations
- Test all color combinations for WCAG compliance
- Provide alternative visual indicators for color-coded information
- Ensure interactive elements have clear focus states
- Maintain sufficient contrast in both light and dark modes 