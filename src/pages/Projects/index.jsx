import { useState } from "react";
import Button from "../../Components/Button";
import "./Project.css";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectData = [
    {
      title: "Food Order Website",
      desc: "Online food ordering web application with user-friendly interface.",
      details: "Developed a full-stack food ordering website where users can browse menus, add items to cart, and place orders. Implemented responsive UI using React and Bootstrap, managed state efficiently, and integrated backend APIs for dynamic data handling.",
      link: "https://github.com/Saranya-J-A/capstone-foodproject"
    },
    {
      title: "Portfolio Website",
    desc: "Built using React and Bootstrap",
    details: "Includes responsive design and routing.",
    link: "https://github.com/Saranya-J-A"
    }
  ];

  return (
    <div className="projects">
      <div className="container py-5">

        <h2 className="text-center mb-5">My Projects</h2>

        <div className="row">
          {projectData.map((project, index) => (
            <div className="col-md-4" key={index}>
              <div className="project-card">

                <h5>{project.title}</h5>
                <p>{project.desc}</p>

                <div onClick={() => setSelectedProject(project)}>
                  <Button btname="View Details" />
                </div>

              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="project-details text-center mt-5">
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.details}</p>

            <a href={selectedProject.link} target="_blank" rel="noreferrer">
              <Button btname="View on GitHub" />
            </a>

            <div onClick={() => setSelectedProject(null)} className="mt-3">
              <Button btname="Close" />
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Projects;