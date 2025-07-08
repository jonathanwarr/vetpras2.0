# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Vetpras is a Next.js application for finding affordable veterinary care in Canada. It's a transparent search platform for veterinary clinics and pet care services.

## Development Commands

- `npm run dev` - Start development server (localhost:3000)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Tech Stack

- **Framework**: Next.js 15.3.5 with App Router
- **Styling**: Tailwind CSS v4.1.11
- **React**: Version 19.0.0
- **Linting**: ESLint with Next.js config

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── admin/             # Admin functionality
│   │   ├── login/         # Admin login page
│   │   └── page.jsx       # Admin dashboard
│   ├── privacy-policy/    # Privacy policy page
│   ├── search/           # Search functionality
│   ├── layout.jsx        # Root layout component
│   ├── page.jsx          # Home page
│   └── globals.css       # Global styles
├── components/           # Reusable components
│   ├── layout/          # Layout components
│   ├── search/          # Search-related components
│   └── ui/              # UI components
├── lib/                 # Library code
└── utils/               # Utility functions
```

## Key Architecture Notes

- Uses Next.js App Router (not Pages Router)
- Components are written as functional components with JSX
- Tailwind CSS is configured for styling with dark mode support
- Basic global styles with CSS custom properties for theming
- Clean component structure with separation of concerns

## Development Notes

- The app uses modern React (v19) with Next.js 15
- All components use `.jsx` extension
- ESLint is configured with Next.js core web vitals rules
- Dark mode is handled via CSS media queries and custom properties