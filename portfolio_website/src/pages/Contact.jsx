import React from "react";

export default function Contact() {
  return (
    <section className="max-w-xl mx-auto space-y-8">
      <h2 className="text-4xl font-semibold text-center">Let’s Connect</h2>
      <form action="https://formspree.io/f/yourformid" method="POST" className="space-y-4">
        <input name="name" placeholder="Name" required className="w-full p-3 border rounded-lg" />
        <input name="email" placeholder="Email" type="email" required className="w-full p-3 border rounded-lg" />
        <textarea name="message" placeholder="Message" rows="5" required className="w-full p-3 border rounded-lg"></textarea>
        <button type="submit" className="block mx-auto px-6 py-3 bg-blue-500 text-white rounded-lg">Send Message</button>
      </form>
      <div className="flex justify-center space-x-6">
        <a href="https://github.com/you" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/you" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </section>
}