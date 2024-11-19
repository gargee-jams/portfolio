// components/ProjectCard.js

const ProjectCard = ({ project }) => {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <img className="w-full h-48 object-cover" src={project.image} alt={project.title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{project.title}</div>
          <p className="text-gray-700 text-base">{project.description}</p>
        </div>
        <div className="px-6 py-4">
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800">
            View Project
          </a>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;
  