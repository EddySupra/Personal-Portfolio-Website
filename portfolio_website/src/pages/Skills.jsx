import React from "react";

const categories = {
  Frontend: ["React", "Vue", "HTML5", "CSS3", "Tailwind CSS"],
  Backend: ["Node.js", "Express", "Python", "Django"],
  Tools: ["Git", "Docker", "Webpack"],
};

export default function Skills() {
  return (
    <section className="space-y-8">
      <h2 className="text-4xl font-semibold text-center">Skills</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
        {Object.entries(categories).map(([cat, skills]) => (
          <div key={cat} className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-2xl font-bold mb-4">{cat}</h3>
            <ul className="list-disc list-inside space-y-2">
              {skills.map((s) => (<li key={s}>{s}</li>))}
            </ul>
          </div>
        ))}
      </div>
    </section>
}