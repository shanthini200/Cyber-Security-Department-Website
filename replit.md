# Cybersecurity Department Website

## Overview

This is a full-stack web application for a Cybersecurity Department showcasing faculty, students, events, gallery, infrastructure, and curriculum information. The application features a modern cyberpunk-themed design with a matrix-style background and interactive components. It's built as a single-page application with dynamic content management capabilities through a RESTful API.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom cyberpunk theme variables and animations
- **UI Components**: Radix UI primitives with shadcn/ui component library for accessible, customizable components
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework for REST API endpoints
- **Language**: TypeScript for type safety across the full stack
- **Database ORM**: Drizzle ORM for type-safe database operations
- **API Design**: RESTful endpoints for CRUD operations on faculty, students, events, achievements, gallery items, and contact messages
- **Development Server**: Custom Vite integration for seamless development experience

### Database Schema
- **Faculty**: Profile information, specializations, contact details, and bio
- **Students**: Registration details, mentor assignments, research interests, and academic year
- **Events**: Workshop/seminar details, dates, locations, and participant tracking
- **Achievements**: Recognition records categorized by type (student, faculty, department)
- **Gallery**: Media items with categorization for labs, events, activities, and achievements
- **Contact Messages**: Form submissions with subject categorization

### Design System
- **Theme**: Dark cyberpunk aesthetic with custom CSS variables
- **Colors**: Purple (#8B5CF6), cyan (#00D4FF), and green (#22C55E) accent colors on dark backgrounds
- **Typography**: JetBrains Mono for code-style elements, Inter for body text
- **Animations**: Matrix background effect, hover transformations, and smooth scrolling
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts

### Component Architecture
- **Layout Components**: Navigation with smooth scrolling, footer with quick links
- **Section Components**: Modular page sections (Hero, About, Faculty, Students, Events, Gallery, Infrastructure, Curriculum, Contact)
- **UI Components**: Reusable components based on Radix UI primitives
- **Custom Components**: Matrix background, lightbox gallery viewer, cyber-themed cards

## External Dependencies

### Core Dependencies
- **Database**: PostgreSQL with Neon serverless driver for cloud-hosted database
- **ORM**: Drizzle ORM with Drizzle Kit for schema management and migrations
- **Styling**: Tailwind CSS with PostCSS for utility-first styling
- **Form Management**: React Hook Form with Hookform Resolvers for form validation
- **Validation**: Zod with Drizzle-Zod integration for schema validation

### UI and Interaction
- **Component Library**: Radix UI suite for accessible primitives (dialogs, dropdowns, navigation, etc.)
- **Icons**: Lucide React for consistent iconography
- **Animations**: Class Variance Authority and CLSX for conditional styling
- **Date Handling**: date-fns for date formatting and manipulation
- **Carousel**: Embla Carousel React for image galleries

### Development Tools
- **Build Tools**: Vite with React plugin and TypeScript support
- **Development**: TSX for TypeScript execution, ESBuild for production builds
- **Code Quality**: TypeScript strict mode for type checking
- **Session Management**: Connect-PG-Simple for PostgreSQL session storage
- **Replit Integration**: Replit-specific plugins for development environment

### API and Data Management
- **HTTP Client**: Native fetch API with custom wrapper functions
- **State Management**: TanStack Query for server state, caching, and background updates
- **Error Handling**: Custom error boundaries and toast notifications
- **Image Management**: Unsplash integration for placeholder images