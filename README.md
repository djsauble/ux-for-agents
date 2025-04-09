# Laws of UX for Agents

A static website optimized for development by AI agents, with a focus on clear separation between design documentation and implementation.

## Project Structure

```
├── docs/               # Design documentation and specifications
│   ├── design/        # Design system documentation
│   ├── architecture/  # Technical architecture decisions
│   └── guides/        # Development guides and best practices
├── src/               # Source code
│   ├── components/    # Reusable UI components
│   ├── pages/        # Page components
│   ├── styles/       # Global styles and themes
│   └── utils/        # Utility functions
├── public/           # Static assets
│   ├── images/       # Image assets
│   └── fonts/        # Font files
├── scripts/          # Development tools and scripts
├── tests/            # Test files
└── config/           # Configuration files
```

## Design Documentation

The `docs/` directory contains all design-related documentation that agents should reference when making changes to the codebase. This includes:

- Design system specifications
- Component guidelines
- Color schemes and typography
- Layout patterns
- Interaction patterns
- Accessibility requirements

## Development Guidelines

1. Always reference the design documentation in `docs/` before making changes
2. Keep code and documentation in sync
3. Follow the established component structure
4. Maintain consistent naming conventions
5. Document any deviations from the design system

## Getting Started

This project is built with Next.js and uses TypeScript for type safety. Follow these steps to set up your development environment:

### Prerequisites

- Node.js (v18 or later)
- npm (v9 or later)
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/laws-of-ux-for-agents.git
   cd laws-of-ux-for-agents
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:3000`.

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check for code quality issues

For more detailed information about the project architecture and design system, please refer to the documentation in the `docs/` directory. 