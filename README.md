# Neocarbon

A modern Next.js application built with TypeScript, Tailwind CSS, and optimized for Vercel deployment.

## Features

- ⚡ **Next.js 15** with App Router
- 🎨 **Tailwind CSS 4** for styling
- 🔧 **TypeScript** for type safety
- 📱 **Responsive design** with mobile-first approach
- 🚀 **Vercel Analytics** and **Speed Insights** for performance monitoring
- 🎯 **ESLint** and **Prettier** for code quality
- 🔍 **Lucide React** for beautiful icons

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd neocarbon
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
neocarbon/
├── src/
│   ├── app/           # App Router pages and layouts
│   ├── components/    # Reusable UI components
│   ├── lib/          # Utility functions and configurations
│   └── styles/       # Global styles and Tailwind config
├── public/            # Static assets
├── .prettierrc       # Prettier configuration
├── next.config.ts    # Next.js configuration
├── tailwind.config.ts # Tailwind CSS configuration
└── tsconfig.json     # TypeScript configuration
```

## Deployment

This project is optimized for Vercel deployment:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

The project includes:
- `@vercel/analytics` for analytics
- `@vercel/speed-insights` for performance monitoring
- Optimized build configuration

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Lucide React](https://lucide.dev/) - Beautiful icons
- [Vercel](https://vercel.com/) - Deployment platform

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License.
