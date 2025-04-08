// Demonstrates importing static assets
import projectImage from '../assets/my-project-image.png';

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl?: string; // Make image optional
  link?: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Cool Project One',
    description: 'This project does amazing things using modern web technologies.',
    imageUrl: projectImage, // Use the imported image
    link: '#',
    tags: ['React', 'TypeScript', 'Vite'],
  },
  {
    id: 2,
    title: 'Another Great App',
    description: 'Built with performance and user experience in mind. Demonstrates data fetching (simulated).',
    link: '#',
    tags: ['Performance', 'UX', 'Data'],
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'The very website you are looking at! Built to showcase Vite features.',
    // No image for this one
    tags: ['Vite', 'React', 'Tailwind', 'Meta'],
  },
];

// Example of exporting JSON data directly if preferred (less type safe)
// export constjsonData = { message: "You can import .json files too!" };