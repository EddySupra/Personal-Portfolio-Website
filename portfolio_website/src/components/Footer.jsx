import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white/80 text-center py-4">
      <p className="text-sm">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
    </footer>
  );
}