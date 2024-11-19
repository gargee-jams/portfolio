// components/NMC.js

const NMC = () => {
    // Sample projects data (you can replace this with actual data)
    const projects = [
      { title: 'Project 1', description: 'Description of project 1', imageUrl: '/images/project1.jpg' },
      { title: 'Project 2', description: 'Description of project 2', imageUrl: '/images/project2.jpg' },
      { title: 'Project 3', description: 'Description of project 3', imageUrl: '/images/project3.jpg' },
      { title: 'Project 4', description: 'Description of project 4', imageUrl: '/images/project4.jpg' },
      { title: 'Project 5', description: 'Description of project 5', imageUrl: '/images/project5.jpg' },
      { title: 'Project 6', description: 'Description of project 6', imageUrl: '/images/project6.jpg' },
    ];
  
    return (
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">My Projects</h2>
  
          {/* Grid Layout for rows */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default NMC;
  