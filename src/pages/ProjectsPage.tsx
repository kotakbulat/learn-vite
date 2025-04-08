import ProjectCard from '../components/ProjectCard';
// Demonstrates importing data from a TS file (could also be .json)
import { projects } from '../data/projects';

function ProjectsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;