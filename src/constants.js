import { Code2, Layout, Smartphone, Palette, Globe, Gauge, Github, Linkedin, Mail, Twitter, ExternalLink } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export const SERVICES = [
  {
    title: 'Responsive Web Development',
    description: 'Building websites that look and perform beautifully on every device, from mobile to ultra-wide desktops.',
    icon: Smartphone,
  },
  {
    title: 'UI Implementation',
    description: 'Translating complex designs into pixel-perfect, interactive, and accessible user interfaces.',
    icon: Layout,
  },
  {
    title: 'React Ecosystem',
    description: 'Developing scalable applications using the latest React features, hooks, and state management solutions.',
    icon: Code2,
  },
  {
    title: 'Design Systems',
    description: 'Creating reusable component libraries and design tokens for consistent branding across platforms.',
    icon: Palette,
  },
  {
    title: 'Landing Page Optimization',
    description: 'High-conversion landing pages focused on performance, accessibility, and modern aesthetics.',
    icon: Globe,
  },
  {
    title: 'Performance Tuning',
    description: 'Optimizing core web vitals, bundle sizes, and rendering performance for a lightning-fast experience.',
    icon: Gauge,
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: 'Nexus Dashboard',
    description: 'A high-performance analytics dashboard for SaaS companies with real-time data visualization.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Recharts'],
    category: 'Dashboard',
    image: 'https://images.unsplash.com/photo-1551288049-bbda38a5f850?auto=format&fit=crop&q=80&w=800',
    demo: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'Ethereal E-Commerce',
    description: 'A premium lifestyle brand store with seamless transitions and a custom cart implementation.',
    tags: ['Next.js', 'Framer Motion', 'Stripe'],
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1523381295211-ad946e1c84f6?auto=format&fit=crop&q=80&w=800',
    demo: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'Aura Social App',
    description: 'Minimalist social platform focused on deep connections and privacy-first architecture.',
    tags: ['React Native', 'Firebase', 'Redux'],
    category: 'App',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800',
    demo: '#',
    github: '#',
  },
  {
    id: 4,
    title: 'Vertex Landing',
    description: 'A high-impact landing page for a cutting-edge AI software startup.',
    tags: ['React', 'GSAP', 'Vite'],
    category: 'Landing Page',
    image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&q=80&w=800',
    demo: '#',
    github: '#',
  },
  {
    id: 5,
    title: 'Pulse Fitness App',
    description: 'A comprehensive workout tracking application with social challenges.',
    tags: ['Next.js', 'PostgreSQL', 'Tailwind'],
    category: 'App',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800',
    demo: '#',
    github: '#',
  },
  {
    id: 6,
    title: 'Nova Crypto',
    description: 'Real-time cryptocurrency tracking and portfolio management interface.',
    tags: ['React', 'D3.js', 'WebSockets'],
    category: 'Dashboard',
    image: 'https://images.unsplash.com/photo-1621761191319-c6fb5200c40b?auto=format&fit=crop&q=80&w=800',
    demo: '#',
    github: '#',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Sarah Johnson',
    role: 'CEO at TechFlow',
    content: 'Aura delivered a pixel-perfect implementation of our design system. The performance improvements we saw after the React migration were significant.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
  },
  {
    name: 'Michael Chen',
    role: 'Founder of Vertex AI',
    content: 'Searching for a frontend dev who understands UI/UX is hard. Aura is that rare combination of technical skill and design sensibility.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Marketing Director',
    content: 'Our landing page conversion rate increased by 40% after the redesign. The smooth animations really give our brand a premium feel.',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200',
  },
];

export const SKILLS = [
  'HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js',
  'Tailwind CSS', 'Bootstrap', 'Git & GitHub', 'Framer Motion', 'REST APIs', 'UI/UX Design'
];

export const STATS = [
  { label: 'Years Experience', value: '5+' },
  { label: 'Projects Completed', value: '40+' },
  { label: 'Client Satisfaction', value: '100%' },
];

export const SOCIALS = [
  { name: 'GitHub', icon: Github, href: 'https://github.com' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
  { name: 'Email', icon: Mail, href: 'mailto:hello@aura.dev' },
];
