export interface Project {
  id: number;
  title: string;
  category: 'Hotel/Resort' | 'Architect' | 'Banquet Hall' | 'Flower Shop';
  description: string;
  tech: string[];
  image: string;
  link: string;
  featured?: boolean;
}

export const projects: Project[] = [
  // Hotel/Resort
  {
    id: 1,
    title: 'Aurelian SC Resort',
    category: 'Hotel/Resort',
    description: 'A luxurious resort experience with premium amenities and stunning views.',
    tech: ['Next.js', 'React', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop',
    link: 'https://aurelian-sc-resort.vercel.app/',
  },
  {
    id: 2,
    title: 'Zyverra Falls Resort',
    category: 'Hotel/Resort',
    description: 'A serene getaway nestled near majestic waterfalls, offering ultimate relaxation.',
    tech: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop',
    link: 'https://zyverrafalls-resort-sc.vercel.app/',
  },
  {
    id: 3,
    title: 'Lumina Resort',
    category: 'Hotel/Resort',
    description: 'Modern luxury resort with a focus on light and architecture.',
    tech: ['React', 'Lucide React', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1544124499-58912cbddaad?q=80&w=2072&auto=format&fit=crop',
    link: 'https://lumina-resort-sc.vercel.app/',
  },
  // Architect
  {
    id: 4,
    title: 'Aura Design Studio',
    category: 'Architect',
    description: 'Bespoke architectural designs that blend functionality with aesthetic beauty.',
    tech: ['Next.js', 'Typescript', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
    link: 'https://aura-designstudio-sc.vercel.app/',
  },
  {
    id: 5,
    title: 'Architexture',
    category: 'Architect',
    description: 'Modern architectural portfolio showcasing innovative structures and urban planning.',
    tech: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    link: 'https://architexture.vercel.app/',
  },
  {
    id: 6,
    title: 'Lumeire SC Architecture',
    category: 'Architect',
    description: 'Focusing on light and space to create breathtaking architectural experiences.',
    tech: ['React', 'Next.js', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop',
    link: 'https://lumeire-sc.vercel.app',
  },
  // Banquet Hall
  {
    id: 7,
    title: 'Banquet Hall Gold',
    category: 'Banquet Hall',
    description: 'Premium event space for elegant weddings and high-end celebrations.',
    tech: ['Next.js', 'React', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop',
    link: 'https://banquet-hall-gold.vercel.app',
  },
  // Flower Shop
  {
    id: 8,
    title: 'Botaniq Flora',
    category: 'Flower Shop',
    description: 'Artisanal flower shop offering premium floral arrangements and botanical gifts.',
    tech: ['React', 'E-commerce', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1444930694458-01babf71870c?q=80&w=2071&auto=format&fit=crop',
    link: 'https://botaniq-flora.vercel.app',
  },
];
