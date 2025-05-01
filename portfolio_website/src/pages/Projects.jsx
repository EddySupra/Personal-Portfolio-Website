import React from "react";

const projects = [
  {
    id: "project-1",
    title: "Project One",
    summary: "A brief summary of project one.",
    img: "/project1.png",
  },
  // add more projects
];

export default function Projects() {
  return (
    <section id="projects" className="space-y-8">
      <h2 className="text-4xl font-semibold text-center">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <a
            key={p.id}
            href={`/projects/${p.id}`}
            className="group block bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-40 object-cover group-hover:scale-105 transition"
            />
            <div className="p-4">
              <h3 className="text-2xl font-bold">{p.title}</h3>
              <p className="mt-2 text-sm">{p.summary}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
}