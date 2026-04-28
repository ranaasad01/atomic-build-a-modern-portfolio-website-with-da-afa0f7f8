export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: "frontend" | "fullstack" | "backend" | "mobile";
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: number;
  challenges: string[];
  techDetails: string;
}

export const projects: Project[] = [
  {
    slug: "nexus-dashboard",
    title: "Nexus Analytics Dashboard",
    description:
      "A real-time analytics dashboard with interactive charts, data visualization, and team collaboration features built for SaaS companies.",
    longDescription:
      "Nexus is a comprehensive analytics platform designed for modern SaaS teams. It provides real-time data visualization, customizable dashboards, and powerful filtering capabilities. The platform handles millions of events per day with sub-second query performance thanks to a carefully optimized data pipeline.",
    image: "/projects/nexus.jpg",
    tags: ["Next.js", "TypeScript", "Recharts", "Prisma", "PostgreSQL", "Redis"],
    category: "fullstack",
    liveUrl: "https://nexus-demo.vercel.app",
    githubUrl: "https://github.com/alexdev/nexus",
    featured: true,
    year: 2024,
    challenges: [
      "Optimizing real-time data streaming for thousands of concurrent users",
      "Building a flexible chart configuration system without sacrificing performance",
      "Implementing row-level security for multi-tenant data isolation",
    ],
    techDetails:
      "Built with Next.js 14 App Router, using Server Components for initial data fetching and React Query for client-side updates. The backend uses Prisma ORM with PostgreSQL for structured data and Redis for caching hot queries.",
  },
  {
    slug: "aurora-ecommerce",
    title: "Aurora E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with AI-powered product recommendations, dynamic pricing, and a seamless checkout experience.",
    longDescription:
      "Aurora is a modern e-commerce solution that leverages AI to personalize the shopping experience. It features intelligent product recommendations, dynamic pricing based on demand, and a streamlined checkout flow that reduces cart abandonment by 40%.",
    image: "/projects/aurora.jpg",
    tags: ["React", "Node.js", "Stripe", "MongoDB", "OpenAI", "Tailwind CSS"],
    category: "fullstack",
    liveUrl: "https://aurora-shop.vercel.app",
    githubUrl: "https://github.com/alexdev/aurora",
    featured: true,
    year: 2024,
    challenges: [
      "Integrating AI recommendations without impacting page load times",
      "Building a reliable payment flow with proper error handling and retries",
      "Designing a scalable product catalog that handles 100k+ SKUs",
    ],
    techDetails:
      "React frontend with a Node.js/Express API. MongoDB for flexible product data, Stripe for payments, and OpenAI embeddings for semantic product search and recommendations.",
  },
  {
    slug: "pulse-social",
    title: "Pulse Social Network",
    description:
      "A developer-focused social platform with code sharing, live collaboration, and integrated CI/CD status feeds.",
    longDescription:
      "Pulse is where developers connect and share their work. It features syntax-highlighted code snippets, real-time collaborative editing, GitHub integration for automatic project updates, and a feed algorithm that surfaces relevant technical content.",
    image: "/projects/pulse.jpg",
    tags: ["Next.js", "Socket.io", "GraphQL", "PostgreSQL", "Docker", "AWS"],
    category: "fullstack",
    liveUrl: "https://pulse-dev.io",
    githubUrl: "https://github.com/alexdev/pulse",
    featured: true,
    year: 2023,
    challenges: [
      "Scaling WebSocket connections to support thousands of simultaneous collaborators",
      "Building a fair and relevant content ranking algorithm",
      "Implementing operational transforms for conflict-free collaborative editing",
    ],
    techDetails:
      "Next.js frontend with a GraphQL API powered by Apollo Server. Real-time features use Socket.io with Redis pub/sub for horizontal scaling. Deployed on AWS ECS with auto-scaling.",
  },
  {
    slug: "zephyr-weather",
    title: "Zephyr Weather App",
    description:
      "A beautiful weather application with hyperlocal forecasts, severe weather alerts, and personalized climate insights.",
    longDescription:
      "Zephyr delivers accurate, hyperlocal weather data with a focus on beautiful data visualization. Users get 14-day forecasts, hourly breakdowns, air quality indices, and personalized alerts based on their activities and preferences.",
    image: "/projects/zephyr.jpg",
    tags: ["React Native", "TypeScript", "Expo", "Weather API", "Mapbox"],
    category: "mobile",
    liveUrl: "https://zephyr-weather.app",
    githubUrl: "https://github.com/alexdev/zephyr",
    featured: false,
    year: 2023,
    challenges: [
      "Aggregating data from multiple weather providers for accuracy",
      "Designing intuitive visualizations for complex meteorological data",
      "Optimizing battery usage for background location tracking",
    ],
    techDetails:
      "React Native with Expo for cross-platform mobile. Custom animated charts built with React Native Reanimated. Weather data aggregated from OpenWeatherMap, Tomorrow.io, and NOAA APIs.",
  },
  {
    slug: "forge-cms",
    title: "Forge Headless CMS",
    description:
      "A developer-first headless CMS with a visual schema builder, GraphQL API, and real-time preview capabilities.",
    longDescription:
      "Forge is a headless CMS built for teams that need flexibility without sacrificing developer experience. It features a drag-and-drop schema builder, auto-generated GraphQL and REST APIs, webhook support, and a live preview mode that works with any frontend framework.",
    image: "/projects/forge.jpg",
    tags: ["Node.js", "GraphQL", "React", "PostgreSQL", "TypeScript", "Docker"],
    category: "backend",
    githubUrl: "https://github.com/alexdev/forge-cms",
    featured: false,
    year: 2023,
    challenges: [
      "Auto-generating type-safe GraphQL schemas from user-defined content models",
      "Building a real-time preview system that works across different frontend frameworks",
      "Designing a permission system flexible enough for complex editorial workflows",
    ],
    techDetails:
      "Node.js backend with a dynamically generated GraphQL API using graphql-js. Content models stored in PostgreSQL with a JSONB column for flexible field definitions. React admin UI with a custom drag-and-drop schema builder.",
  },
  {
    slug: "lumina-ui",
    title: "Lumina UI Component Library",
    description:
      "An accessible, themeable React component library with 60+ components, dark mode support, and comprehensive Storybook documentation.",
    longDescription:
      "Lumina is a production-ready component library built with accessibility and customization in mind. It ships with 60+ components, full TypeScript support, built-in dark mode, and a powerful theming system. Every component meets WCAG 2.1 AA standards.",
    image: "/projects/lumina.jpg",
    tags: ["React", "TypeScript", "Storybook", "Radix UI", "CSS Variables", "Vitest"],
    category: "frontend",
    liveUrl: "https://lumina-ui.dev",
    githubUrl: "https://github.com/alexdev/lumina-ui",
    featured: false,
    year: 2022,
    challenges: [
      "Ensuring WCAG 2.1 AA compliance across all 60+ components",
      "Building a theming system that's powerful yet easy to use",
      "Maintaining bundle size while adding features",
    ],
    techDetails:
      "Built on top of Radix UI primitives for accessibility. Styled with CSS custom properties for theming. Bundled with tsup for optimal tree-shaking. Tested with Vitest and React Testing Library.",
  },
];

export const categories = [
  { value: "all", label: "All Projects" },
  { value: "fullstack", label: "Full Stack" },
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
  { value: "mobile", label: "Mobile" },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
