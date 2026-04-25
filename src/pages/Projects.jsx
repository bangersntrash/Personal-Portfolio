function Projects() {
  const projectList = [
    {
      title: "Quiz App",
      description: "A simplistic React Native app that functions as a short 3-question quiz.",
      link: "https://github.com/bangersntrash/Quiz-App"
    },
    {
      title: "Graphic Media & Art Portfolio",
      description: "A presentation showcasing various physical and digital media works I have worked on thus far.",
      link: "https://canva.link/4cjvwjnc3g5cuaz"
    },
    {
      title: "Ray Express",
      description: "A high-fidelity Figma prototype for an improved public transit app in the central Florida area (group project).",
      link: "https://www.figma.com/proto/N5K3A4V89wN2HbCWceBkLD/Lab-9-10?node-id=111-642&t=uV4XleeoLfxD2R2D-1"
    }
  ];

  return (
    <div className="min-h-screen px-6 py-12 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="card">
            <h3 className="text-xl font-semibold mb-2">
              {project.title}
            </h3>
            <p className="mb-4">{project.description}</p>
            <a
              href={project.link}
              className="text-blue-500 hover:underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;