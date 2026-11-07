"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { lessons } from "../lib/lessons";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          Shikho<span>Grammer</span>
        </Link>
        <button
          className="burger"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
        <nav className={`links ${open ? "open" : ""}`}>
          {lessons.map((l) => (
            <Link
              key={l.slug}
              href={`/${l.slug}`}
              className={pathname === `/${l.slug}` ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {l.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
