import { Project } from '../data/projects'; // Import the type

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
      {project.imageUrl && (
         // Demonstrating Static Asset Handling for component-specific assets
        <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{project.description}</p>
        <div className="flex flex-wrap gap-1 mb-3">
            {project.tags.map(tag => (
                <span key={tag} className="text-xs bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300 px-2 py-0.5 rounded-full">{tag}</span>
            ))}
        </div>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            View Project →
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;