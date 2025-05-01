import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const projectDetails = {
  "project-1": {
    title: "Project One",
    description: "Detailed description of project one.",
    challenges: "Challenges you faced.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    screenshots: ["/project1-1.png", "/project1-2.png"],
    liveLink: "https://example.com",
    repoLink: "https://github.com/you/project-one",
  },
  // add more
};

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectDetails[id];
  if (!project) return <p>Project not found.</p>;

  return (
    <section className="max-w-4xl mx-auto space-y-6">
      <button
        onClick={() => navigate(-1)}
        className="text-blue-500 underline"
      >
        ← Back to Projects
      </button>
      <h2 className="text-4xl font-bold">{project.title}</h2>
      <p>{project.description}</p>
      <h3 className="text-2xl font-semibold">Technologies Used</h3>
      <ul className="list-disc list-inside">
        {project.technologies.map((tech) => (<li key={tech}>{tech}</li>))}
      </ul>
      <h3 className="text-2xl font-semibold">Challenges</h3>
      <p>{project.challenges}</p>
      <h3 className="text-2xl font-semibold">Screenshots</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {project.screenshots.map((src) => (
          <img
            key={src}
            src={src}
            alt={`${project.title} screenshot`}
            className="rounded-lg shadow"
          />
        ))}
      </div>
      <div className="flex space-x-4">
        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-green-500 text-white rounded-lg">Live Demo</a>
        <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-gray-700 rounded-lg">View Code</a>
      </div>
    </section>
}