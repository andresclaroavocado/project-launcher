# Project Architect Frontend (Vite + React)

A modern, fast React frontend for the Project Architect application built with Vite.

## Features

- ⚡ **Vite** - Lightning fast build tool and dev server
- ⚛️ **React 18** - Latest React with concurrent features
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🎭 **Framer Motion** - Smooth animations and transitions
- 🔥 **React Hot Toast** - Beautiful toast notifications
- 📱 **Responsive Design** - Works on all devices
- 🚀 **TypeScript** - Type-safe development

## Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── App.tsx          # Main application component
├── main.tsx         # Application entry point
└── index.css        # Global styles and Tailwind imports
```

## API Integration

The frontend communicates directly with the FastAPI backend:

- **Development**: Direct API calls to `http://localhost:8000`
- **Production**: Update the API URL in the application code

## Key Features

### 🎯 Project Idea Input
- Natural language project description
- Real-time validation
- Integration with AI conversation system

### 🎨 Modern UI/UX
- Dark theme with purple/pink gradients
- Smooth animations with Framer Motion
- Responsive design for all screen sizes

### 🔧 Development Experience
- Hot module replacement (HMR)
- TypeScript for type safety
- ESLint for code quality
- Tailwind CSS for styling

## Configuration

### Vite Config (`vite.config.ts`)
- Development server on port 3000
- API proxy to backend on port 8000
- React plugin for JSX support

### Tailwind Config (`tailwind.config.js`)
- Custom color palette (purple/pink theme)
- Custom animations
- Responsive breakpoints

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Backend Integration

This frontend is designed to work with the FastAPI backend. Make sure the backend is running on port 8000 before testing the frontend.

## Migration from Next.js

This Vite version replaces the Next.js frontend with:

- ✅ Faster development server
- ✅ Simpler configuration
- ✅ Better build performance
- ✅ Same functionality and UI
- ✅ API proxy for backend communication

## Troubleshooting

### Port Conflicts
If port 3000 is in use, Vite will automatically try the next available port.

### API Connection Issues
1. Ensure the backend is running on port 8000
2. Check the proxy configuration in `vite.config.ts`
3. Verify CORS settings in the backend

### Build Issues
1. Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
2. Check TypeScript errors: `npm run lint`
3. Verify all dependencies are installed correctly 