import React from "react";

export default function About() {
  return (
    <section className="max-w-3xl mx-auto space-y-8">
      <h2 className="text-4xl font-semibold">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <p>…your background…</p>
          <p>…education…</p>
          <p>…interests…</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/headshot.jpg"
            alt="Headshot"
            className="w-64 h-64 object-cover rounded-lg mb-4"
          />
          <a
            href="/resume.pdf"
            download
            className="px-5 py-3 bg-blue-500 text-white rounded-lg"
          >
            Download Résumé
          </a>
        </div>
      </div>
    </section>
}