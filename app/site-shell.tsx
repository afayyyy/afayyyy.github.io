import type { ReactNode } from "react";

export default function SiteShell({ active, children }: { active: "home" | "research" | "life" | "cv"; children: ReactNode }) {
  return <>
    <a className="skip-link" href="#top">Skip to content</a>
    <header>
      <a className="brand" href="/">JING HAN</a>
      <nav aria-label="Main navigation">
        <a href="/" aria-current={active === "home" ? "page" : undefined}>Home</a>
        <a href="/research/" aria-current={active === "research" ? "page" : undefined}>Research</a>
        <a href="/personal-life/" aria-current={active === "life" ? "page" : undefined}>Personal Life</a>
        <a href="/cv/" aria-current={active === "cv" ? "page" : undefined}>CV</a>
      </nav>
    </header>
    {children}
    <footer className="site-footer"><div><strong>Jing Han</strong><a href="mailto:1155179329@link.cuhk.edu.hk">1155179329@link.cuhk.edu.hk</a><span>The Chinese University of Hong Kong</span></div><div><a href="/Jing_Han_CV.pdf" target="_blank" rel="noopener noreferrer">Curriculum vitae ↗</a><span>© 2026 Jing Han · Updated October 2026</span></div></footer>
  </>;
}
