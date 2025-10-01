# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is Vasu Solanki's personal portfolio website built with React 18, featuring modern animations, interactive elements, and a responsive design. The portfolio showcases data analysis projects, programming skills, and includes an interactive cat-catching game in the experience section.

## Development Commands

### Core Development
```bash
# Install dependencies
npm install

# Start development server (localhost:3000)
npm start
# Alternative development command
npm run dev

# Build for production
npm run build

# Run tests
npm test

# Build and copy to root (for GitHub Pages deployment)
npm run build-prod

# Eject from Create React App (irreversible)
npm run eject
```

### Development Tools
```bash
# Serve production build locally for testing
npx serve -s build

# Check for security vulnerabilities
npm audit

# Fix security vulnerabilities
npm audit fix
```

## Architecture & Structure

### Component Architecture
The application follows a modular React component structure with clear separation of concerns:

**Sections**: Main content areas (Header, About, Education, Experience, Skills, Projects, CV)
**UI Components**: Reusable interface elements (Navigation, LoadingScreen, ParticleBackground, ScrollIndicator)

### Key Design Patterns

1. **Section-based Layout**: Each major content area is a separate section component with its own ID for navigation
2. **Intersection Observer Pattern**: Uses `react-intersection-observer` to track visible sections and update navigation state
3. **Animation-driven UX**: Heavy use of Framer Motion for entrance animations, hover effects, and transitions
4. **Custom Typewriter Effect**: State-based role cycling animation in the header
5. **Interactive Game Element**: Cat-catching game in the Experience section using CSS positioning and React state

### File Structure
```
src/
├── App.js                    # Main app with routing and section visibility logic
├── App.css                   # Global styles and theme variables
├── components/
│   ├── sections/            # Main content sections
│   │   ├── Header.js        # Hero section with typewriter effect & social links
│   │   ├── About.js         # Personal info and background
│   │   ├── Education.js     # Academic information  
│   │   ├── Experience.js    # Interactive cat-catching game
│   │   └── [Skills.js, Projects.js, CV.js] # Referenced but not yet implemented
│   └── ui/                  # Reusable UI components
│       ├── Navigation.js    # Desktop/mobile navigation with smooth scrolling
│       ├── LoadingScreen.js # Initial loading animation
│       ├── ParticleBackground.js # Background particle effects
│       └── ScrollIndicator.js    # Scroll progress indicator
└── [component].css          # Component-specific styles
```

### Technology Stack

**Core Framework**: React 18.2.0 with Create React App
**Animation**: Framer Motion for complex animations, AOS for scroll animations
**Styling**: CSS-in-JS with Bootstrap 5.3.0 for responsive grid
**Particles**: react-particles with tsparticles-slim
**Additional**: react-intersection-observer for visibility detection

### Key Dependencies & Their Usage

- **framer-motion**: All section animations, hover effects, and transition choreography
- **react-intersection-observer**: Section visibility detection for navigation highlighting  
- **aos (Animate On Scroll)**: Scroll-triggered animations throughout the site
- **bootstrap/react-bootstrap**: Responsive grid system and utility classes
- **react-particles**: Animated background particle system
- **react-router-dom**: Ready for routing (currently single-page)

## Development Patterns

### Animation Strategy
- **Entrance Animations**: Consistent fade-up pattern with staggered delays
- **Hover Effects**: Scale, translate, and shadow transformations
- **Section Transitions**: Intersection Observer triggers animations when 30% visible
- **Performance**: GPU-accelerated transforms, `transform3d` usage for smooth animations

### State Management
- **Local State**: Each component manages its own animation and interaction state
- **Global State**: `activeSection` tracked in App.js, passed to Navigation
- **No Redux/Context**: Simple prop passing sufficient for current complexity

### Responsive Design
- **Mobile-first**: Components designed for mobile, then enhanced for desktop
- **Breakpoints**: Bootstrap's standard breakpoints (576px, 768px, 992px, 1200px)
- **Navigation**: Separate mobile hamburger menu and desktop horizontal nav
- **Flexible Layouts**: CSS Grid and Flexbox with responsive units (clamp, vw/vh)

### Code Organization
- **Component Isolation**: Each section is self-contained with its own styles
- **Reusable UI**: Common elements (navigation, loading) in separate ui/ folder
- **CSS Modules**: Component-specific CSS files prevent style conflicts
- **Consistent Naming**: BEM-style class names for maintainability

## Missing Components

The following components are referenced in App.js but not yet implemented:
- `src/components/sections/Skills.js` - Should display technical skills with progress bars/icons
- `src/components/sections/Projects.js` - Should showcase portfolio projects with filtering
- `src/components/sections/CV.js` - Should display/download resume functionality

These components need to be created to match the existing animation and design patterns.

## Customization Notes

### Personal Information
- **Header.js**: Name, roles array, social links, email, and background video
- **About.js**: Personal description, profile image, and background story  
- **Education.js**: Academic details and timeline

### Styling & Branding
- **Color Scheme**: Google Material Design colors (Blue #4285f4, Green #34a853, Yellow #fbbc05, Red #ea4335)
- **Typography**: System fonts with gradient text effects
- **Brand Logo**: "VS" initials in Navigation component

### Interactive Elements
- **Experience Section**: Cat-catching game with customizable speed, character, and scoring
- **Social Links**: Configurable platforms with hover animations and color theming
- **Particle Background**: Customizable colors, count, and movement patterns

## Performance Considerations

- **Code Splitting**: Ready for React.lazy() implementation for larger sections
- **Image Optimization**: Uses lazy loading patterns, could benefit from WebP conversion
- **Animation Performance**: GPU-accelerated transforms, but monitor frame rates on lower-end devices
- **Bundle Size**: Heavy animation libraries increase initial load time

## Deployment

The project is configured for GitHub Pages deployment with the `build-prod` script that copies build files to the root directory. Standard Create React App build process applies.
