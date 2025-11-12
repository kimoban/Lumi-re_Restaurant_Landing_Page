# Pop-Up Restaurant Website

## Overview

This is a single-page marketing website for "Lumière," an exclusive limited-time pop-up restaurant. The application showcases the restaurant's story, menu highlights, ambiance, and event details through an elegant, visually-driven interface inspired by high-end restaurant websites like Eleven Madison Park and Noma.

The site emphasizes visual storytelling with AI-generated food photography, sophisticated typography (Playfair Display for headings, Inter for body text), and a design language that communicates scarcity and exclusivity.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript, using Vite as the build tool and development server.

**Routing**: Client-side routing implemented with Wouter, a lightweight React router. The application currently has two routes: the main home page (`/`) and a 404 not-found page.

**UI Component Library**: shadcn/ui (New York style variant) built on Radix UI primitives with Tailwind CSS for styling. Components follow a consistent design system with custom CSS variables for theming and spacing.

**State Management**: TanStack Query (React Query) for server state management, providing caching, background updates, and request deduplication. No global client state management library is used; component state is handled with React hooks.

**Styling Strategy**: 
- Tailwind CSS with custom configuration extending the base theme
- Custom CSS variables for colors, spacing, and shadows defined in `index.css`
- Utility-first approach with component-specific styles
- Custom font integration (Playfair Display serif for headings, Inter sans-serif for body text)
- Responsive design with mobile-first approach

**Page Structure**: Single-page application with smooth scrolling between sections:
1. Hero section (full viewport with background image)
2. Story section (narrative about the pop-up)
3. Menu highlights (grid of signature dishes)
4. Ambiance gallery (photo showcase)
5. Event details (location, timing, parking info with embedded map)
6. Printable menu section
7. Reservation footer (CTA and newsletter signup)

**Asset Management**: Static assets (AI-generated images) stored in `attached_assets/generated_images/` and imported directly into components using Vite's asset handling.

### Backend Architecture

**Server Framework**: Express.js running on Node.js with TypeScript.

**API Design**: RESTful JSON API with three main endpoints:
- `GET /api/menu` - Returns array of menu items
- `GET /api/event-details` - Returns event information (dates, location, contact)
- `GET /api/story` - Returns restaurant story content

**Data Storage**: Currently using in-memory storage (`MemStorage` class) with hardcoded data. The storage interface (`IStorage`) is designed for easy swapping to a database implementation.

**Development Server**: Custom Vite integration in development mode that:
- Serves the React application through Vite's middleware
- Handles HMR (Hot Module Replacement) via WebSocket
- Provides server-side rendering template injection
- Includes custom error overlay and development tooling for Replit environment

**Production Build**: 
- Client builds to static assets in `dist/public`
- Server bundles to ESM format in `dist` using esbuild
- Serves pre-built static files in production mode

### Database Schema

**Current Implementation**: In-memory storage with TypeScript interfaces.

**Data Models** (defined in `shared/schema.ts` with Zod validation):

1. **MenuItem**:
   - `id`: string (unique identifier)
   - `name`: string (dish name)
   - `description`: string (brief description)
   - `price`: number (price in dollars)
   - `category`: enum ("appetizer" | "entree" | "dessert")
   - `imageUrl`: string (path to dish image)

2. **EventDetails**:
   - `name`: string (restaurant name)
   - `tagline`: string (marketing tagline)
   - `dates`: string (event date range)
   - `times`: string (operating hours)
   - `location`: object containing name, address, city, and coordinates (lat/lng)
   - `seatingInfo`: string (capacity and seating style)
   - `parkingInfo`: string (parking instructions)
   - `contactEmail`: string
   - `contactPhone`: string

3. **Story**:
   - `title`: string
   - `paragraphs`: array of strings (story content split into paragraphs)

**Future Database Integration**: The codebase includes Drizzle ORM configuration (`drizzle.config.ts`) set up for PostgreSQL via `@neondatabase/serverless`, indicating readiness for database integration. The schema would likely mirror the Zod schemas defined in `shared/schema.ts`.

### External Dependencies

**UI and Component Libraries**:
- Radix UI primitives (comprehensive set including dialogs, dropdowns, popovers, tooltips, etc.)
- shadcn/ui component system
- Embla Carousel for potential image carousels
- Lucide React for icons
- React Hook Form with Zod resolvers for form validation
- class-variance-authority and clsx for dynamic className generation

**Database and ORM**:
- Drizzle ORM (`drizzle-orm` and `drizzle-zod`)
- Neon serverless PostgreSQL driver (`@neondatabase/serverless`)
- Database connection configured via `DATABASE_URL` environment variable

**Development Tools**:
- Replit-specific Vite plugins (runtime error modal, cartographer, dev banner)
- TypeScript for type safety across client and server
- ESBuild for server bundling
- PostCSS with Tailwind CSS and Autoprefixer

**Utilities**:
- date-fns for date manipulation
- nanoid for unique ID generation
- wouter for lightweight client-side routing

**Design System Configuration**:
- Custom Tailwind configuration with extended color palette based on HSL CSS variables
- Custom border radius values
- Extensive shadcn/ui theming via CSS variables
- Font loading via Google Fonts (Playfair Display and Inter)